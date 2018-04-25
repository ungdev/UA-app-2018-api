// TODO : BDD
// schema :
// {
//      id:int
//      toornament:int
//      participants:[str]
//      score:str
//      result:str
//      status:str 'todo' | 'doing' | 'done'
// }


const groups = [
    { id: 0, toornament: 0, participants: ['SuperEquipe', 'mumuxeTeam'], score: '16-2', result: 'mumuxeTeam', status: 'done' },
    { id: 1, toornament: 1, participants: ['mumuxeTeam', 'mangeCaca'], score: '', result: '', status: 'todo' },
    { id: 2, toornament: 2, participants: ['JeanBétonnière', 'mangeCaca'], score: '', result: '', status: 'doing' }
]

module.exports = groups;
