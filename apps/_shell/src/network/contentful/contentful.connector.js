const contentful = require('contentful')

const spaceId = 'wojnpcjssrle'
const token = 'f41de9ec963b1d079406c552f32a36c980bdc1bc1824d2ca5c088e6f4251a700'

export default contentful.createClient({
    host: 'preview.contentful.com',
    space: spaceId,
    accessToken: token
})