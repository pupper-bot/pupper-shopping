import { 
    getCreatorInfo,
    getCreatorsList    
  } from "../../commands/creators";
  import { wrapAsyncFunc } from "../../../utils/wrap-async-route";
  
  export default class AuthController {
    constructor(router) {
      router.get("/:id", wrapAsyncFunc(this.creatorSpotlight));
      router.get("/", wrapAsyncFunc(this.creatorsList));
      router.put("/:id", wrapAsyncFunc(this.updateCreator));
    }
  
    async updateCreator(req,res) {
      const { id } = req.params;
      const { creator } = req.body;
      if( creator.firstName === 'Anak') {
        console.log ("I am responding with this: ", creator, id)
        creator.firstName = "Pupperbot"
        res.send({creator})
      }
      else { 
        console.log ("I am responding with this: ", creator, id)
        res.send({creator})
    }

    }

    async creatorSpotlight(req, res) {
      const { id } = req.params
      console.log("ID", id, req.params)
      const creator = await getCreatorInfo(id);
      res.send({ creator });
    }
  
    async creatorsList(req, res) {
      const creators = await getCreatorsList();
      res.send({ creators });
    }
    async creatorRename(req,res) {
      console.log("hello from the DB ")
      res.send({ creators })
      }

  }
  
