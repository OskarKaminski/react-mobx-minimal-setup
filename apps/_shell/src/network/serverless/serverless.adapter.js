const API_URI = 'https://...'

const prepareToUpload = (object) => {
    let sanitized = {}

    if(typeof object === 'string'){
        if(object !== ""){
            return object
        } else {
            return undefined
        }
    }

    if(typeof object === 'object'){
        for(const key in object){
            const prop = object[key]
            if(Array.isArray(prop)){
                sanitized[key] = prop.map(prepareToUpload)
            } else if (typeof prop === 'object') {
                sanitized[key] = prepareToUpload(prop)
            }
            else if (prop !== "") {
                sanitized[key] = prop
            }
        }
    }

    return sanitized
}

export const saveResource = async ({resource, type}) => {
    const sanitized = prepareToUpload(resource)
    const response = await fetch(`${API_URI}/course`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            type,
            resource: sanitized
        })
    })

    return await response.json()
}

export const saveQuestion = async (question) => {
    return saveResource({
        resource: question,
        type: 'question'
    })
}