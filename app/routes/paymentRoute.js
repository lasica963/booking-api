import express from 'express';
import { paymentService } from '../services/paymentServices';

const router = express.Router();

router.post('/create-payment-intent', async (req, res) => {
  // req.body -> have to have reservation ID
  // add to stripe obj reservation id for set payment status on webhook
  const {
    reservation_id,
  } = req.body;

  const {
    response,
    status,
  } = await paymentService(reservation_id);

  return res.status(status).send(response);
});

export default router;
