const express = require('express');
const cors = require('cors');
const { createServer, logger } = require('./utils');
const { fcmRoutes, hwRoutes, viraRoutes } = require('./routes');
// const client = require('cloud-config-client');
const SpringCloudConfig = require('spring-cloud-config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

createServer(app);

app.use('/fcm', fcmRoutes);
app.use('/hw', hwRoutes);
app.use('/vira', viraRoutes);
app.get('/ping', (req, res) => {
    logger.log('info', 'Server pinged!')
    const options = {
        configPath: __dirname + "/config",
        profiles: ['dev'],
        level: 'debug'
    }
    SpringCloudConfig.load(options).then((x) => {
        res.status(200).json({
            message: x
        })
    }).catch((err) => {
        res.status(500).json({
            message: __dirname
        })
    })
})

app.use((req, res, next) => {
    res.status(404).json(404)
});