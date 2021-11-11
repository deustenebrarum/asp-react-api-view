import { store } from '../store'

export async function register({username, password}) {
    if (store.getState().token !== "")
        return null
    const { status } = await fetch("/api/auth/register", {
        "headers": {
            "content-type": "application/json"
        },
        "body": JSON.stringify({username, password}),
        "method": "POST"
    }).then(data => data.json())
    
    if (status === 'Success') {
        return login({username, password})
    } else {
        return null
    }
}

export async function login({username, password}) {
    if (store.getState().token !== "") {
        return null
    }
    return generateToken({username, password})
}

export async function generateToken({username, password}) {
    const response = await fetch("/api/auth/login", {
        "headers": {
            "content-type": "application/json"
        },
        "body": JSON.stringify({username, password}),
        "method": "POST"
    });
    
    if (!response.ok)
        return null

    const { token } = await response.json();
    
    store.dispatch({type: "SET_AUTH_TOKEN", payload: token});

    return token
}