export function env(env) {

    const api_env =
    {
        "API_TOKEN": process.env.REACT_APP_API_TOKEN,

        "API_URL": process.env.REACT_APP_API_URL,

        "API_PORT": process.env.REACT_APP_API_PORT
    }

    return api_env[env]

}