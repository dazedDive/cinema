import { DataManager } from "../helpers/dataManager.helper.js";
import { Reservation } from "../models/reservation.model.js";
import { Seance } from "../models/seance.model.js";




export class ReservationController {

    index = async (param) => {
        const id = param[0];
        const seance = DataManager.getOne("seance", id);
        const film = seance?.getFilm();
        const resa = new Reservation;
        if(!id || !seance){ 
            location.href = '/error';
        }
        const {SeanceDetailIndexView} = await import ('../views/seanceDetail/seanceDetail.index.view.js') 
        const view = new SeanceDetailIndexView({seance,film, resa});
        return view.render();
    }

}