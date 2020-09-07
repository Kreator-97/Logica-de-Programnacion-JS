/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

// Clases

class Pelicula {
    constructor({id, titulo, director, estreno, pais, generos, calificacion}) {
        this.id           = id;
        this.titulo       = titulo;
        this.director     = director;
        this.estreno      = estreno;
        this.pais         = pais;
        this.generos      = generos;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

    static get listaGeneros() {
        return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western']
    }

    static generosAceptados() {
        return console.info(`Los generos aceptados son : ${Pelicula.listaGeneros.join(', ')}`)
    }

    // Métodos genericos
    validarCadena(propiedad, valor) {
        if(!valor) return console.warn(`${propiedad}: ${valor}, No es una cadena de texto`);
        if(typeof valor !== 'string') return console.warn(`${propiedad}: ${valor} ingresado, No es una cadena de texto`);
        return true;
    }
    validarNumero(propiedad, valor) {
        if(!valor) return console.warn(`${propiedad}: ${valor} esta vacío`)
        if(typeof valor !== 'number') return console.warn(`${propiedad}: ${valor} ingresado no es un número`);
        return true
    }
    validarLongitud(propiedad, valor, longitud) {
        if(valor.length > longitud) return console.error(`${propiedad}: ${valor} excede el números de caracteres permitidos (${longitud})`)
        return true;
    }
    validarArreglo(propiedad, valor) {
        if(!valor) return console.warn(`${propiedad}: ${valor} no es válido`);
        if(!(valor instanceof Array)) return console.error(`${propiedad}: ${valor} ingresado No es un arreglo`);
        if(valor.length === 0) return console.error(`${propiedad}: ${valor} no puede estar vacio`);
        for(let cadena of valor) {
            if(typeof cadena !== 'string') return console.error(`El valor ${cadena} ingresado no es una cadena de texto`)
        }
        return true;
    }
    // Métodos especifícos
    validarIMDB(id) {
        if(this.validarCadena('IMDB id', id)) {
            if(!(/^([a-z]{2}([0-9]{7}))/.test(id))) {
                return console.warn(`IMDB ID ${id} no es válido, debe de tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes números`)
            }
        }
    }
    validarTitulo(titulo) {
        if(this.validarCadena('Titulo', titulo)) {
            this.validarLongitud('Titulo', titulo, 100);
        }
    }
    validarDirector(director) {
        if(this.validarCadena('Director', director)) {
            this.validarLongitud('Director', director, 50);
        }
    }
    validarEstreno(estreno) {
        if(this.validarNumero('Estreno', estreno)) {
            if(!(/^([0-9]{4})/.test(estreno))) {
                console.error(`El estreno ${estreno} no es un año válido, debe de ser un número de 4 números`);
            }
        }
    }
    validarPais(pais) {
        this.validarArreglo('Pais', pais)
    }
    validarGeneros(generos) {
        if(this.validarArreglo('generos', generos)) {
            for(let genero of generos) {
                if(!Pelicula.listaGeneros.includes(genero)) {
                    console.error(`Generos incorrectos ${generos.join(", ")}`)
                    Pelicula.generosAceptados();
                }
            }
        }
    }
    validarCalificacion(calificacion) {
        if(this.validarNumero('Calificación', calificacion)) {
            return (calificacion < 0 || calificacion > 10) 
                ? console.error('La calificacion debe de estar entre 0 y 10')
                : this.calificacion = calificacion.toFixed(1);
        }
    }
    fichaTecnica() {
        console.info(`Ficha Tecnica: \n 
Titulo: ${this.titulo} \n 
Director: ${this.director} \n
Año: ${this.estreno} \n
Pais: ${this.pais.join(", ")} \n
Generos: ${this.generos.join(', ')} \n
Calificacion: ${this.calificacion} \n
IMDB ID: ${this.id}
`)
    }
}

const pelis = [
    {
        id: 'tt9870158',
        titulo: 'El hombre araña',
        director: 'Tobey spencer',
        estreno: 2004,
        pais: ['EE.UU'],
        generos: ['Comedy','Drama', 'Action'],
        calificacion: 8.55
    }, 
    {
        id: 'tt9889066',
        titulo: 'The Dark Knight',
        director: 'Cristopher Nolan',
        estreno: 2008,
        pais: ['EE.UU'],
        generos: ['Crime','Drama', 'Action'],
        calificacion: 9.1
    }, 
    {
        id: 'tt98700485',
        titulo: 'Batman vs Superman',
        director: 'Zack Snider',
        estreno: 2017,
        pais: ['EE.UU', 'Mexico'],
        generos: ['Comedy', 'Adventure', 'Action'],
        calificacion: 8.2
    }
]
pelis.forEach( el => el = new Pelicula(el).fichaTecnica());