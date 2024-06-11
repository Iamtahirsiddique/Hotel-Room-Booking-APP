import express from 'express';
import mongoose from 'mongoose';
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';
import { createHotel } from '../controllers/hotel.js';
import { updateHotel } from '../controllers/hotel.js';
import { deleteHotel } from '../controllers/hotel.js';
import { getHotelBYId } from '../controllers/hotel.js';
import { getAllHotels } from '../controllers/hotel.js';

const router = express.Router();

// create new hotel
router.post('/',createHotel);

// edit or update the hotel info

router.put('/:id',updateHotel);

// dellete one hotel

router.delete('/:id',deleteHotel);

// get one hotel by id

router.get('/:id',getHotelBYId);

// get all hotels

router.get('/', getAllHotels);

export default router