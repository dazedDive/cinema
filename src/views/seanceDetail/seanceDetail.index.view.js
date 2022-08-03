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
        const { seance, film } = this.models;
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
                <span class="input-group-text" id="inputGroup-sizing-sm">Nom</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
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
        </div>
      
      <div class="d-flex justify-content-end m-5">
      <button class = "btn btn-success" id="reserver">Reserver !</button>
      </div>
      `;
      
      const viewhtml= resumer + formulaireresa 
      const pagehtml  = document.createElement('div');
      pagehtml.innerHTML=viewhtml
      
      let prixtt=seance.price;
      const nbPlace = pagehtml.querySelector('#nbPlace');
      let prixFinal =`<h3 class="text-success mx-5"> prix Total = ${prixtt} €/TTC </h3>` 

      const reserver = pagehtml.querySelector('#reserver') 
        reserver.onclick =()=>{
            console.log('ok')
        }

    nbPlace.onchange=()=>{
        prixtt = (nbPlace.value*seance.price)
        }
     
    pagehtml.innerHTML+=prixFinal
        
    return pagehtml
};
};




