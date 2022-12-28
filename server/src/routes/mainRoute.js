const router = require('express').Router();
const { Tasklist } = require('../../db/models');

//* GET req
router.get('/', async (req, res) => {
  const taskList = await Tasklist.findAll({ order: ['createdAt'] });
  res.json(taskList);
});

//* POST req.
router.post('/', async (req, res) => {
  // console.log(req.body, 'this is REQ BODY');
  try {
    const createTask = await Tasklist.create(req.body);
    // console.log(createTask, 'HELLO THIS IS LOG');
    res.json(createTask);
  } catch (err) { console.log(err); }
});

//* PATCH
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { taskName } = req.body;

  const updateTask = await Tasklist.update({ taskName }, { where: { id } });
  if (!updateTask) console.error('error');
  res.status(200).end();
});

router.patch('/tick/:id', async (req, res) => {
  const { id } = req.params;
  // const isDone = await Tasklist.findByPk(id);
  const { isDone } = req.body;
  // console.log(isDone, 'HERERERE');

  const done = await Tasklist.update({ isDone: !isDone }, { where: { id } });
  if (!done) console.error('error');
  res.status(200).end();
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Tasklist.destroy({ where: { id } });
  res.status(200).end();
});
module.exports = router;
