class Game {

    _id;
    _nom;
    _nbJoueurMax;
    _nbJoueurMin;
    _regle;
    _plateau;
    _cases;
    _auteur;
    _des;

    constructor(game){
        if(!game) return;
        if(game._id) this._id = game._id;
        if(game._nom) this._nom = game._nom;
        if(game._nbJoueurMax) this._nbJoueurMax = game._nbJoueurMax;
        if(game._nbJoueurMin) this._nbJoueurMin = game._nbJoueurMin;
        if(game._regle) this._regle = game._regle;
        if(game._plateau) this._plateau = game._plateau;
        if(game._cases) this._cases = game._cases;
        if(game._auteur) this._auteur = game._auteur;
        if(game._des) this._des = game._des;
    }

    get id(){
        return this._id;
    }

    set id(id){
        this._id = id;
        return this;
    }
    get nom(){
        return this._id;
    }

    set nom(nom){
        this._nom = nom;
        return this;
    }
    get nbJoueurMax(){
        return this._nbJoueurMax;
    }

    set nbJoueurMax(nbJoueurMax){
        this._nbJoueurMax = nbJoueurMax;
        return this;
    }
    get nbJoueurMin(){
        return this._nbJoueurMin;
    }

    set nbJoueurMin(nbJoueurMin){
        this._nbJoueurMin = nbJoueurMin;
        return this;
    }
    get regle(){
        return this._regle;
    }

    set regle(regle){
        this._regle = regle;
        return this;
    }
    get plateau(){
        return this._plateau;
    }

    set plateau(plateau){
        this._plateau = plateau;
        return this;
    }
    get cases(){
        return this._cases;
    }

    set cases(cases){
        this._cases = cases;
        return this;
    }
    get auteur(){
        return this._auteur;
    }

    set auteur(auteur){
        this._auteur = auteur;
        return this;
    }
    get des(){
        return this._des;
    }

    set des(des){
        this._des = des;
        return this;
    }

    roledice(){
        console.log('5');
    }
}

export default Game;