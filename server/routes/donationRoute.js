const express = require('express');
const donationController = require('../controllers/donationController')

const donationRouter = express.Router();

donationRouter.post('/donate', donationController.createDonation);

donationRouter.get('/allDonationsAmount', donationController.getTotalDonationsAmount);
donationRouter.get('/allDonationsData', donationController.getAllDonationsData);
donationRouter.get('/list/:associationNumber', donationController.getDonationListForAssociation);
donationRouter.get('/amount/:associationNumber', donationController.getDonationAmountForAssociation);
donationRouter.get('/sum/:userId', donationController.getTotalDonationAmountOfUser);
donationRouter.get('/:userId', donationController.getTotalDonationListOfUser);
donationRouter.get('/:userId/association/:associationNumber', donationController.getDonationsByUserForAssociation);

donationRouter.delete('/deleteAllDonations', donationController.deleteAllDonations);

module.exports = donationRouter;