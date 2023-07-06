const express = require('express')
const {
  createAdv,
  getAdvs,
  getAdv,
  deleteAdv,
  updateAdv
} = require('../controllers/advController')
const router = express.Router()

// GET all workouts
router.get('/', getAdvs)

// GET a single workout
router.get('/:id', getAdv)

// POST a new workout
router.post('/', createAdv)

// DELETE a workouts
router.delete('/:id', deleteAdv)

// UPDATE a workout
router.patch('/:id', updateAdv)

module.exports = router