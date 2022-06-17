import express from 'express';
import { createPost, getPosts, deletePost, updatePostLikes } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts );
router.post('/', createPost );
router.delete('/:id', deletePost);
router.post('/:id', updatePostLikes);

export default router;