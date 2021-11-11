test('API login fetch request test', async () => {
    expect.assertions(1);
    return await fetch("/api/authentication/register", {
        "body": JSON.stringify({Username: "test", Password: "test"}),
        "method": "POST",
        "mode": "cors",
        "credentials": "same-origin"
    }).then(data => data.json())
    .then(data => expect(data.status).toEqual('Success'))
})