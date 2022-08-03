export class FilmDetailIndexView {
  models = null;
  constructor(models) {
    this.models = models;
    this.importCss();
  }

  importCss = async () => {
    const cssModule = await import("../filmDetail/filmDetail.index.view.css", {
      assert: { type: "css" },
    });
    document.adoptedStyleSheets = [cssModule.default];
  };

  render = () => {

    const { film, seances } = this.models;
    const listeseances = seances.map((lesSeance)=>{
      
      return `<a href ="/reservation/${lesSeance.id}" class="btn btn-success spa-link"> Seance du : ${lesSeance.jour}
       à ${lesSeance.heure} à partir de ${lesSeance.price} €/ttc </a>
       </br>`;
    }
    ).join('');



    const viewhtml=  `
  <div class ="row">
    <div class="col-6>
        <br class="pt-5" >
          <div class="card m-auto" style="width: 38rem;">
            <img src="${film.affiche}" class="card-img-top" alt="${film.title}">
            <div class="card-body">
                <h5 class="card-title">${film.title}</h5>
                <p class="card-text">${film.synopsis}</p>
                <p class="card-text text-center">${listeseances}</p>
            </div>
        </div>
      </div>
        <div class ="col-6>
        <div>
         
         </div>
     </div>
  </div>          `;
    const pagehtml  = document.createElement('div');
    pagehtml.innerHTML=viewhtml
    return pagehtml
  };

}
