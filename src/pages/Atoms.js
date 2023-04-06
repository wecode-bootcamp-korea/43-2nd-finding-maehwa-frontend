import { atom } from 'recoil';

const countState = atom({
  key: 'counter',
  default: 0,
});

const commentState = atom({
  key: 'comment',
  default: '',
});

const commentListState = atom({
  key: 'commentList',
  default: [],
});

const likeState = atom({
  key: 'likeState',
  dafault: true,
});

const gradeState = atom({
  key: 'grade',
  default: 0,
});

const selectedTag = atom({
  key: 'tag',
  default: [],
});

const selectedTagList = atom({
  key: 'tags',
  default: [],
});
const heartState = atom({
  key: 'isHeart',
  default: true,
});

const exportAtom = {
  countState,
  commentState,
  commentListState,
  likeState,
  gradeState,
  selectedTag,
  selectedTagList,
  heartState,
};

export default exportAtom;
