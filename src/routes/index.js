const router = require('express').Router();

// Combine all auth routes and  prefixing with /api/v1/auth
router.get('/api/v1/auth', (req, res) => {
  res.status(200).json({ message: 'Auth Router' });
});

// Combine all board routes and prefixing with /api/v1/auth
router.use('/api/v1/board', (req, res) => {
  res.status(200).json({ message: 'board' });
});

// Combine all task routes and prefixing with /api/v1/task
router.use('/api/v1/task', (req, res) => {
  res.status(200).json({ message: 'Taskk' });
});


module.exports = router;