import client from './contentful.connector'

export const getLessons = async () => {
    const response = await client.getEntries({content_type: 'lesson'})
    return response.items
}

export const getQuestions = async () => {
    const response = await client.getEntries({content_type: 'question'})
    return response.items
}

export const getSections = async () => {
    const response = await client.getEntries({content_type: 'section'})
    return response.items
}
