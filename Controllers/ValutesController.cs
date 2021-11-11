using System;
using System.Collections.Generic;
using System.Dynamic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using asp_react_api_view.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace asp_react_api_view.Controllers
{


    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class ValutesController : ControllerBase
    {
        private static string getPage(string url)
        {
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            HttpWebRequest webRequest = (HttpWebRequest)WebRequest.Create(url);
            using (HttpWebResponse response = (HttpWebResponse)webRequest.GetResponse())
            {
                using (Stream resStream = response.GetResponseStream())
                {
                    StreamReader reader = new StreamReader(resStream, Encoding.GetEncoding("windows-1251"));
                    return reader.ReadToEnd();
                }
            }
        }

        [HttpGet]
        [Route("{date}")]
        public ActionResult<IEnumerable<Valute>> Get(string date)
        {
            string xml = getPage(Config.apiUri + $"?date_req={date.Replace('-', '/')}");

            XmlDocument doc = new XmlDocument();
            doc.LoadXml(xml);

            if (!doc.DocumentElement.HasAttribute("Date"))
            {
                return NotFound();
            }

            List<Valute> valutes = new List<Valute>();

            foreach (XmlNode node in doc.DocumentElement)
            {
                valutes.Add(new Valute
                {
                    Id = node.Attributes.GetNamedItem("ID").Value,
                    NumCode = node.SelectSingleNode("NumCode").InnerText,
                    CharCode = node.SelectSingleNode("CharCode").InnerText,
                    Nominal = node.SelectSingleNode("Nominal").InnerText,
                    Name = node.SelectSingleNode("Name").InnerText,
                    Value = node.SelectSingleNode("Value").InnerText
                });
            }

            return valutes;
        }
    }
}
