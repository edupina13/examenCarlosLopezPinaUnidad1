//  1.- Diferencias entre var, let y const






console.log('Ejemplo var:');


var edad = 18;//  aqui asigno la variable edad en 18
var nombre = 'Carlos';
var apellidoVar = 'Lopez Piña';
var isMen = true;


edad = 40;//  aqui reasigno el valor de la variable edad a 40
console.log(
  `Nombre completo: ${nombre} ${apellidoVar}, sexo: ${
    isMen ? 'Hombre' : 'Mujer'
  }`
);
console.log(`Edad: ${edad}`);// al momento de imprimir la edad toma el valor de la variable reasignada


// Ejemplo let
console.log('Ejemplo let:');


let nombreLet = 'Carlos';//  aqui asigno el nombre  de la variable nombreLet en carlos


if (true) {
  let nombreLet = 'Eduardo';//  aqui reasigno el nombre dentro de la variable nombreLet a Eduardo

  console.log(nombreLet, 'dentro del IF');// aqui imprime el nuebo valor de la variable dentro de if
}


console.log(nombreLet, 'fuera del IF');//  aqui imprime en nombre de la variable nombreLet pero con su valor original en este caso carlos


console.log('Ejemplo var:');


var nombreVar = 'Carlos';//  aqui asigno el nombre  de la variable nombreVar en carlos


if (true) {
  var nombreVar = 'Eduardo';//  aqui reasigno el nombre  de la variable nombreVar a Eduardo

  console.log(nombreVar, 'dentro del IF');// en este casi imprime en la variable con el valor reasignado Eduardo
}


console.log(nombreVar, 'fuera del IF');// en este caso el valor de la variable fuera de la condicion sigue siendo Eduardo ya que toma el eltimo valor asignado


// Ejemplo const, siempre tiene que tener un valor asignado, y no se puede cambiar
console.log('Ejemplo const:');


const apellidoConst = 'Piña';
// apellidoConst = 'Perez'; // Error: Assignment to constant variable.
console.log(`Apellido ejemplo const: ${apellidoConst}`);


// Ejemplo const con objetos
const colores = ['Red', 'Yellow', 'Green', 'Blue'];
console.log('Colores del const:', colores);



//2.- Consumo de APIs

// Obtener lista de usuarios y seleccionar el primer usuario Async await
const getUsers = async () => {
  try {
    const response = await fetch(`${baseUrl}/users`);
    const users = await response.json();
    setTimeout(() => {
        console.log('usuario uno:');
      console.log(users[0]);
    }, '3000');


    return users[0]; // Aqui devuelvo el primer usuario
  } catch (error) {
    console.error('Error obteniendo los usuarios:', error);
  }finally{
    console.log('operacion finalizadaaaa')
  }
};


getUsers();



// Crear un nuevo post para el usuario seleccionado
const createPost = async (userId) => {
  try {
    const response = await fetch(`${baseUrl}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Nuevo Post',
        body: 'Este es un nuevo post del pinha.',
        userId: userId,
      }),
    });
    const newPost = await response.json();
    console.log('Post creado con async:', newPost);
    return newPost;
  } catch (error) {
    console.error('Error creando el post:', error);
  }
};


createPost();


//




// Actualizar el título del post recién creado
const updatePost = (postId) => {
  return fetch(`${baseUrl}/posts/${postId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'Título Actualizado',
    }),
  })
    .then((response) => response.json())
    .then((updatedPost) => {
      console.log('Post actualizado:', updatedPost);
      return updatedPost;
    })
    .catch((error) => {
      console.error('Error actualizando el post:', error);
    });
};


updatePost();





// Eliminar el post
const deletePost = (postId) => {
    
  return fetch(`${baseUrl}/posts/${postId}`, {
    method: 'DELETE',
  })
    .then(() => {
        setTimeout(() => {
            console.log(postId)
            console.log('Post eliminado exitosamente con then');
          }, '5000');
   
    })
    .catch((error) => {
      console.error('Error eliminando el post:', error);
    });
};
deletePost();



//3.- Simulación de Promesas

const ejemploPromesa = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random()*10;
      if (randomNumber > 5) {
        resolve('Promesa resuelta');
        console.log(randomNumber);
      } else {
        reject('Promesa rechazada');
        console.log(randomNumber);
      }
    }, '3000');
  });
};


ejemploPromesa();


//4. Diferencias entre try-catch y finally


// Ejemplo const con try-catch
console.log('Ejemplo try-catch con const:');


const ejemploConst = () => {
  try {
    const coloresTryCatch = ['Red', 'Yellow', 'Green', 'Blue'];
    console.log(`Colores: ${coloresTryCatch}`);


    // Intentar reasignar const causará un error
    coloresTryCatch = ['Purple', 'Orange']; // Error
  } catch (error) {// aqui se atrapa ese error  
    console.error(
      `Error al querer cambiar los valores de una constante: ${error.message}`
    );
  }
};


ejemploConst();


// Ejemplo const con try-catch-finally
console.log('Ejemplo try-catch-finally con const:');


const ejemploConst2 = () => {
  try {
    const coloresTryCatchFinally = ['Red', 'Yellow', 'Green', 'Blue']; // Asigno una cadena de colores
    console.log(`Colores: ${coloresTryCatchFinally}`);


    // Intentar reasignar const causará un error
    coloresTryCatchFinally = ['Purple', 'Orange']; // Aqui reasigno los valores de la cadena lo que causara un error ya que los valores de una constante no se pueden reasignar
  } catch (error) {
    console.error(
      `Error al querer cambiar los valores de una constante: ${error.message}`
    );// aqui se utiliza el catch para 
  } finally {
    console.log('Operación finalizada'); // Se ejecuta siempre, ya sea que se lance una excepción o no
  }
};


ejemploConst2();




//5.-Realiza los cuatro consumos de API del punto 2, pero esta vez:
//a) Usa async/await para las peticiones de y .
//b) Usa .then para las peticiones de y .



// Obtener lista de usuarios y seleccionar el primer usuario con then
const getUsers2 = () => {
    return fetch(`${baseUrl}/users`)
      .then((response) => response.json())
      .then((users) => {
        console.log('lista de todos los usuarios:');
        console.log(users); 
        return users[0]; // Aqui devuelvo el primer usuario
      })
      .catch((error) => {
        console.error('Error obteniendo los usuarios:', error);
      });
  };
  
  
  getUsers2();

// POST con then
  const createPost2 = (userId) => {
    return fetch(`${baseUrl}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Nuevo Post',
        body: 'Este es un nuevo post.',
        userId: userId,
      }),
    })
      .then((response) => {
        
        return response.json();
      })
      .then((newPost) => {
        console.log('Post creado con then:', newPost);
        return newPost;
      })
      .catch((error) => {
        console.error('Error creando el post:', error);
      });
  };
  
  
  createPost2();
  


  //UPDATE con async await


const updatePost2 = async (postId) => {
    try {
      const response = await fetch(`${baseUrl}/posts/${postId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Título Actualizado',
        }),
      });
  
  
      const updatedPost = await response.json();
      console.log('Post actualizado 2 con async await:', updatedPost);
      return updatedPost;
    } catch (error) {
      console.error('Error actualizando el post:', error);
    }
  };
  
  
  updatePost2();
  



// DELETE post con async await


const deletePost2 = async (postId) => {
    try {
      const response = await fetch(`${baseUrl}/posts/${postId}`, {
        method: 'DELETE',
      });
  
      setTimeout(() => {
        
        console.log('Post eliminado exitosamente con  async await');
      }, '6000');
      

    } catch (error) {
      console.error('Error eliminando el post:', error);
    }
  };
  
  
  deletePost2();