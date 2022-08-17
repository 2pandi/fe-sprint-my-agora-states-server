const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    let filterById = (discussion) => {
      if(discussion.id === Number(id)){
        return true;
      }
      return false;
    };
    let filtered = discussionsData.filter(filterById);
    if(filtered.length > 0) res.status(200).send(filtered[0]);
    else res.status(404).send(`Cannot find the id!`);
  }

};

module.exports = {
  discussionsController,
};
