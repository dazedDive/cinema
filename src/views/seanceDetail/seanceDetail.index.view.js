import { DataManager } from "../../helpers/dataManager.helper";

export class SeanceDetailIndexView {

    models = null;
    constructor(models) {
      this.models = models;
      this.importCss();
    }
  
    importCss = async () => {
      const cssModule = await import("./seanceDetail.index.view.css", {
        assert: { type: "css" },
      });
      document.adoptedStyleSheets = [cssModule.default];
    };
    
    render = async () => {
        const { seance, film , resa } = this.models;
        const resumer = `<div class="card my-5 mx-3">
        <div class="card-header">
        ${film.title}
        </div>
        <div class="card-body">
        <blockquote class="blockquote mb-0">
        <p> Le ${seance.jour} à ${seance.heure}</p>
        <footer class="blockquote-footer">pour ${seance.price} € par personne </footer>
        </blockquote>
        </div>
        </div>
        `

        const formulaireresa = `
        <div class="row mx-5">
        <div class="col-6 ">
            <div class="input-group input-group-sm  mb-3">
                <span class="input-group-text">Nom</span>
                <input type="text" id="name" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div>
        </div>
        <div class="col-6">
    <select class="form-select form-select-sm" id="nbPlace" aria-label="form-select-sm example">
                
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
    </select>
    <div class="d-flex justify-content-start m-5 ">
        </div>
        <h3 class="text-success mx-5"> prix Total = <span class="pri">${seance.price}</span> €/TTC </h3>
        <button class = "btn btn-success w-50" id="reserver">Reserver !</button>
        </div>
      
      `;
      
      const viewhtml= resumer + formulaireresa
      const pagehtml  = document.createElement('div');
      pagehtml.innerHTML=viewhtml
      
      let prixtt=seance.price;
      const nbPlace = pagehtml.querySelector('#nbPlace');
      let prixFinal =  pagehtml.querySelector('.pri')
      let reserver = pagehtml.querySelector('#reserver') 
      reserver.onclick =()=>{
        let nom = pagehtml.querySelector('#name').value
        resa.customer=nom;
        resa.nbPlace=nbPlace.value
        
        resa.seance_id=seance.id;
        DataManager.insert(resa)
        alert('reservation enregistré !')


      }
      
      nbPlace.onchange=()=>{
        prixtt = (nbPlace.value*seance.price)
        prixFinal.innerText=`${prixtt}`
      }
      
    
        
    return pagehtml
};
};




