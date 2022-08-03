import { DataManager } from "../helpers/dataManager.helper.js";
import { Seance } from "../models/seance.model.js";



export class ReservationController {

    index = async (param) => {
        const id = param[0];
        const seance = DataManager.getOne("seance", id);
        const film = seance?.getFilm();
        if(!id || !seance){ 
            location.href = '/error';
        }
        const {SeanceDetailIndexView} = await import ('../views/seanceDetail/seanceDetail.index.view.js') 
        const view = new SeanceDetailIndexView({seance,film});
        return view.render();
    }

}