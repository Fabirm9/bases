
const {getAge} = require('../plugins/get-age.plugin');
const {getUuid} = require('../plugins/get-id.plugin');
const {httpClient} = require('../plugins/http-client.plugin')
const buildLogger = require('../plugins/logger.plugin')

module.exports = {
    getAge,
    getUuid,
    httpClient,
    buildLogger
}