---
date: 2024-11-23 19:47
title: Sequelize
tags:
  - sequelize
  - nodejs
  - backend
  - api
  - db
  - ORM
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
cssclasses:
  - hide-embedded-header1
  - wide
categories:
  - Backend
public_note: "true"
category: Backend
---
# Sequelize
`$= dv.current().file.tags.join(" ")`

## Enlaces Relacionados
- [node.js](/backend/node-js/)
- [Backend](/uncategorized/backend/)
- [api](/backend/api/)
- [Databases](/uncategorized/databases/)
- [postgreSQL](/databases/postgresql/)
- ORM
- SQL
- [DSL](/computer%20science/dsl/)
- [TypeScript | Sequelize](https://sequelize.org/docs/v6/other-topics/typescript/)
- [sequelize-typescript - npm](https://www.npmjs.com/package/sequelize-typescript)
- [Sequelize](https://sequelize.org/)
- [Sequelize docs](https://sequelize.org/docs/v6/)
- [Reference | Sequelize](https://sequelize.org/api/v6/identifiers)

## Descripción General
Sequelize es un **ORM para Node.js** que facilita la interacción con **bases de datos relacionales** usando **JavaScript** o **TypeScript**. Permite representar tablas como **clases**, ejecutar consultas usando un **DSL declarativo**, gestionar migraciones y trabajar con diversas bases de datos como **PostgreSQL**, **MySQL**, **MariaDB**, **SQLite** y **SQL Server**.

## Características Principales
- **Mapeo Objeto-Relacional (ORM):**  
	- Representa tablas como clases y filas como objetos.  
	- Acceso a datos mediante métodos en lugar de SQL directo.  
- **Compatibilidad con múltiples motores:**  
	- PostgreSQL
	- MySQL
	- MariaDB  
	- SQLite  
	- SQL Server  
- **Sistema de Migraciones:**  
	- Control de versiones del esquema.  
	- Permite crear, actualizar o revertir estructuras de tablas.  
- **Consultas avanzadas:**  
	- Filtros, paginación, proyecciones, joins, subconsultas.  
	- Incluye un **DSL para consultas** altamente expresivo.  
- **Transacciones:**  
	- Soporta transacciones manuales, automáticas y gestionadas.  
	- Integración con isolation levels.  
- **Integración con TypeScript:**  
	- Soporte oficial y tipos estrictos.  
- **Relaciones avanzadas:**  
	- `hasOne`, `hasMany`, `belongsTo`, `belongsToMany`.  
	- Auto-generación de claves foráneas y tablas pivot.  

## Conceptos Fundamentales
### Modelos (Tablas como Clases)
- Un **modelo** representa una tabla.  
- Los atributos representan columnas.  
- Puede incluir validaciones, índices y getters/setters.  

### Consultas con el DSL de Sequelize
- Consultas mediante objetos JS.  
- Permite filtros complejos sin escribir SQL puro.  
- Acceso granular a operadores (`Op.lt`, `Op.and`, `Op.in`, etc.).

### Relaciones
- Definen la estructura lógica del dominio.  
- Sequelize administra claves externas, nombres y joins automáticamente.

### Migraciones
- Scripts versionados para cambiar el esquema.  
- Integración con CLI.  
- Permite ambientes consistentes (dev, staging, prod).

### Transacciones
- Manejo explícito o implícito.  
- Asegura consistencia en operaciones de lectura/escritura.

## Arquitectura y Flujo de Trabajo
- **Inicialización del ORM:** crear instancia de Sequelize con configuración.  
- **Definición de modelos:** clases o llamadas a `sequelize.define()`.  
- **Asociaciones:** definir relaciones entre modelos.  
- **Migraciones:** mantener sincronía entre código y BD.  
- **Seeders:** poblar datos iniciales.  
- **Consultas:** CRUD, agregaciones, joins y transacciones.

---

## Definición de Modelo (Ejemplo)
{% raw %}
```ts
import { Model, DataTypes } from "sequelize";

class User extends Model {}

User.init(
{
id: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true
},
username: {
  type: DataTypes.STRING,
  allowNull: false
}
},
{ sequelize, modelName: "User" }
);
```
{% endraw %}`

## Relaciones (Ejemplo)

{% raw %}
```ts
User.hasMany(Post, { foreignKey: "userId" });
Post.belongsTo(User);
```
{% endraw %}

## Consulta Filtrada (Ejemplo)

{% raw %}
```ts
const users = await User.findAll({
where: { username: { [Op.like]: "%admin%" } },
limit: 10
});
```
{% endraw %}

## Transacción (Ejemplo)

{% raw %}
```ts
const result = await sequelize.transaction(async (t) => {
const user = await User.create({ username: "test" }, { transaction: t });
await Profile.create({ userId: user.id }, { transaction: t });
return user;
});
```
{% endraw %}

---

## Buenas Prácticas

- Separar definiciones de modelos, migraciones y seeders.  
- Evitar el modo `sync()` en producción.  
- Usar **TypeScript** para mayor seguridad y autocompletado.  
- Centralizar la configuración del ORM (credenciales, logging, pool).  
- Mantener relaciones bien definidas y documentadas.

## Checklist Personal

- [ ] Terminar de leer documentación oficial  
- [ ] Probar integración en aplicación real  
- [ ] Crear migraciones y modelos base  
- [ ] Implementar transacciones críticas  

# Migraciones en Sequelize con codigos

## Arquitectura y Flujo de Trabajo

### Inicialización del ORM
Creación de instancia de Sequelize con configuración de conexión:

{% raw %}
```javascript
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'my_database',
  username: 'my_user',
  password: 'my_password',
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});
```
{% endraw %}

### Definición de Modelos
Estructuración de entidades mediante clases o `sequelize.define()`:

{% raw %}
```javascript
// Método con clases
const { Model, DataTypes } = require('sequelize');

class User extends Model {}
User.init({
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  age: DataTypes.INTEGER
}, { sequelize, modelName: 'user' });

// Método con define()
const Product = sequelize.define('Product', {
  name: DataTypes.STRING,
  price: DataTypes.DECIMAL(10, 2),
  stock: DataTypes.INTEGER
});
```
{% endraw %}

### Asociaciones entre Modelos
Definición de relaciones y vínculos entre entidades:

{% raw %}
```javascript
// Relaciones uno a uno
User.hasOne(Profile);
Profile.belongsTo(User);

// Relaciones uno a muchos
User.hasMany(Post);
Post.belongsTo(User);

// Relaciones muchos a muchos
Project.belongsToMany(User, { through: 'ProjectUsers' });
User.belongsToMany(Project, { through: 'ProjectUsers' });
```
{% endraw %}

## Flujo de Migraciones

### Configuración de Migraciones
Inicialización del sistema de migraciones:

{% raw %}
```bash
# Inicializar estructura de migraciones
npx sequelize-cli init

# Crear nueva migración
npx sequelize-cli migration:generate --name create-users-table
```
{% endraw %}

### Estructura de Migraciones
Archivos de migración con métodos `up` y `down`:

{% raw %}
```javascript
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    
    // Añadir índice
    await queryInterface.addIndex('Users', ['email']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
```
{% endraw %}

### Tipos de Operaciones en Migraciones

#### Modificación de Estructura
{% raw %}
```javascript
// Añadir columna
await queryInterface.addColumn('Users', 'age', {
  type: Sequelize.INTEGER,
  allowNull: true
});

// Modificar columna
await queryInterface.changeColumn('Users', 'email', {
  type: Sequelize.STRING(255),
  allowNull: false,
  unique: true
});

// Eliminar columna
await queryInterface.removeColumn('Users', 'age');
```
{% endraw %}

#### Gestión de Constraints
{% raw %}
```javascript
// Añadir clave foránea
await queryInterface.addConstraint('Posts', {
  fields: ['userId'],
  type: 'foreign key',
  name: 'fk_user_id',
  references: {
    table: 'Users',
    field: 'id'
  },
  onDelete: 'cascade',
  onUpdate: 'cascade'
});

// Eliminar constraint
await queryInterface.removeConstraint('Posts', 'fk_user_id');
```
{% endraw %}

### Ejecución de Migraciones

#### Comandos de Gestión
{% raw %}
```bash
# Ejecutar migraciones pendientes
npx sequelize-cli db:migrate

# Revertir última migración
npx sequelize-cli db:migrate:undo

# Revertir todas las migraciones
npx sequelize-cli db:migrate:undo:all

# Ver estado de migraciones
npx sequelize-cli db:migrate:status
```
{% endraw %}

#### Migraciones en Entorno de Producción
{% raw %}
```javascript
// Script seguro para producción
const runMigrations = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.query('SET CONSTRAINTS ALL DEFERRED');
    await sequelize.migrate();
    console.log('Migraciones completadas exitosamente');
  } catch (error) {
    console.error('Error en migraciones:', error);
    process.exit(1);
  }
};
```
{% endraw %}

## Flujo de Seeders

### Creación de Datos Iniciales
Generación de datos de prueba y configuración:

{% raw %}
```bash
# Crear seeder
npx sequelize-cli seed:generate --name demo-users
```
{% endraw %}

### Implementación de Seeders
{% raw %}
```javascript
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'admin',
        email: 'admin@example.com',
        age: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user1',
        email: 'user1@example.com',
        age: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', {
      username: ['admin', 'user1']
    }, {});
  }
};
```
{% endraw %}

### Gestión de Seeders
{% raw %}
```bash
# Ejecutar todos los seeders
npx sequelize-cli db:seed:all

# Ejecutar seeder específico
npx sequelize-cli db:seed --seed name-of-seeder

# Revertir seeder
npx sequelize-cli db:seed:undo --seed name-of-seeder

# Revertir todos los seeders
npx sequelize-cli db:seed:undo:all
```
{% endraw %}

## Flujo de Consultas y Operaciones

### Operaciones CRUD Básicas
{% raw %}
```javascript
// CREATE
const user = await User.create({
  username: 'john_doe',
  email: 'john@example.com',
  age: 28
});

// READ
const users = await User.findAll({
  where: { age: { [Op.gt]: 25 } },
  limit: 10
});

// UPDATE
await User.update(
  { age: 29 },
  { where: { username: 'john_doe' } }
);

// DELETE
await User.destroy({
  where: { username: 'john_doe' }
});
```
{% endraw %}

### Consultas Avanzadas con Joins
{% raw %}
```javascript
// Incluir asociaciones
const usersWithPosts = await User.findAll({
  include: [{
    model: Post,
    where: { published: true },
    required: false
  }],
  where: {
    age: {
      [Op.between]: [20, 40]
    }
  }
});

// Consultas complejas con agregaciones
const userStats = await User.findAll({
  attributes: [
    'age',
    [sequelize.fn('COUNT', sequelize.col('id')), 'total'],
    [sequelize.fn('AVG', sequelize.col('age')), 'average_age']
  ],
  group: ['age'],
  having: sequelize.literal('COUNT(id) > 1')
});
```
{% endraw %}

### Gestión de Transacciones
{% raw %}
```javascript
// Transacción manual
const transaction = await sequelize.transaction();

try {
  const user = await User.create({
    username: 'new_user',
    email: 'new@example.com'
  }, { transaction });

  await Profile.create({
    userId: user.id,
    bio: 'User biography'
  }, { transaction });

  await transaction.commit();
  console.log('Transacción completada');
} catch (error) {
  await transaction.rollback();
  console.error('Transacción fallida:', error);
}
```
{% endraw %}

## Flujo de Sincronización

### Sincronización Automática
{% raw %}
```javascript
// Sincronizar modelos con la base de datos
await sequelize.sync({ force: false }); // No eliminar datos existentes
await sequelize.sync({ force: true });  // Eliminar y recrear tablas
await sequelize.sync({ alter: true });  // Alterar tablas existentes
```
{% endraw %}

### Estrategias de Sincronización
{% raw %}
```javascript
// Sincronización segura para producción
const syncDatabase = async () => {
  try {
    if (process.env.NODE_ENV === 'development') {
      await sequelize.sync({ alter: true });
    } else {
      // En producción, usar solo migraciones
      await sequelize.authenticate();
      console.log('Conexión verificada, usar migraciones manuales');
    }
  } catch (error) {
    console.error('Error en sincronización:', error);
  }
};
```
{% endraw %}

## Mejores Prácticas del Flujo

### Organización del Proyecto
{% raw %}
```
project/
├── models/
│   ├── index.js
│   ├── user.js
│   └── product.js
├── migrations/
│   ├── 20230101000000-create-users.js
│   └── 20230102000000-create-products.js
├── seeders/
│   └── 20230101000000-demo-users.js
└── config/
    └── config.json
```
{% endraw %}

### Gestión de Versiones
{% raw %}
```javascript
// Control de versiones de esquema en migraciones
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Verificar versión actual antes de aplicar cambios
    const tableInfo = await queryInterface.describeTable('Users');
    
    if (!tableInfo.newColumn) {
      await queryInterface.addColumn('Users', 'newColumn', {
        type: Sequelize.STRING
      });
    }
  }
};
```
{% endraw %}

### Validación y Rollback Seguro
{% raw %}
```javascript
// Estrategia de rollback automático en errores
const safeMigration = async (migrationFunction) => {
  const transaction = await queryInterface.sequelize.transaction();
  
  try {
    await migrationFunction(queryInterface, Sequelize, transaction);
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};
```
{% endraw %}


# Flujos de Trabajo de Migraciones en Sequelize

## Arquitectura Conceptual

### Fundamentos del ORM
Sequelize opera como capa de abstracción entre la aplicación y la base de datos, traduciendo objetos JavaScript en operaciones SQL. Este mapeo objeto-relacional permite manipular datos mediante programación orientada a objetos mientras se mantiene la estructura relacional subyacente.

### Componentes Arquitectónicos

**Capa de Modelos**: Representa las entidades del negocio como clases o definiciones, encapsulando la estructura de datos y las reglas de validación.

**Capa de Migraciones**: Gestiona la evolución del esquema de base de datos mediante versionado controlado, permitiendo avances y retrocesos seguros.

**Capa de Seeders**: Proporciona datos de inicialización y prueba, asegurando consistencia en diferentes entornos.

**Capa de Consultas**: Abstrae las operaciones de base de datos mediante APIs fluidas y construcciones JavaScript.

## Flujo de Inicialización y Configuración

### Establecimiento de Conexión
El proceso comienza con la configuración de la instancia de Sequelize, definiendo parámetros de conexión, dialecto de base de datos y opciones de agrupación de conexiones. Esta configuración establece el canal de comunicación fundamental entre la aplicación y el sistema de persistencia.

### Definición del Modelo de Datos
Cada entidad del dominio se representa mediante modelos que especifican atributos, tipos de datos, restricciones y valores predeterminados. Los modelos sirven como contrato entre la lógica de aplicación y la estructura de almacenamiento, asegurando consistencia en las operaciones.

## Flujo de Gestión de Esquemas

### Filosofía de Migraciones
Las migraciones implementan el principio de "esquema como código", donde cada cambio estructural se versiona y rastrea. Este enfoque permite reproducibilidad, auditoría y despliegue consistente a través de diferentes entornos.

### Ciclo de Vida de Migraciones

**Creación**: Generación de archivos de migración que encapsulan cambios discretos al esquema.

**Ejecución**: Aplicación ordenada y secuencial de migraciones pendientes, manteniendo el estado de versión.

**Reversión**: Capacidad de deshacer cambios específicos cuando sea necesario, facilitando corrección de errores.

**Verificación**: Validación del estado actual versus el estado deseado del esquema.

### Tipos de Operaciones de Migración

**Operaciones Estructurales**: Creación, modificación o eliminación de tablas y columnas.

**Operaciones de Integridad**: Definición de claves primarias, foráneas y restricciones de unicidad.

**Operaciones de Índices**: Optimización de rendimiento mediante estructuras de acceso eficiente.

**Operaciones de Datos**: Transformaciones a nivel de datos durante cambios estructurales.

## Flujo de Asociaciones y Relaciones

### Definición de Vínculos
Las asociaciones establecen relaciones semánticas entre modelos, traduciéndose en joins implícitos y operaciones en cascada. Sequelize soporta los patrones relacionales fundamentales: uno-a-uno, uno-a-muchos y muchos-a-muchos.

### Gestión de Consistencia Referencial
Las asociaciones pueden configurarse con comportamientos específicos para operaciones de eliminación y actualización, asegurando mantenimiento de la integridad referencial según las reglas del negocio.

## Flujo de Datos Iniciales

### Estrategias de Población
Los seeders permiten inicializar la base de datos con conjuntos de datos predefinidos, útiles para desarrollo, pruebas y datos maestros. Este flujo asegura consistencia en los estados iniciales a través de diferentes entornos.

### Control de Ejecución
La aplicación de seeders sigue patrones similares a las migraciones, con capacidad de ejecución selectiva y reversión controlada, manteniendo separación entre estructura y contenido.

## Flujo de Operaciones de Datos

### Patrones de Acceso
Las consultas siguen el patrón CRUD fundamental, extendido con capacidades de filtrado, ordenamiento, paginación y agregación. Las operaciones se construyen mediante APIs fluidas que abstraen la complejidad SQL.

### Gestión de Transacciones
Operaciones atómicas que agrupan múltiples cambios en unidades lógicas, asegurando consistencia mediante commit o rollback completo. Esencial para operaciones complejas que afectan múltiples entidades.

### Mecanismos de Consulta Avanzada
Inclusión automática de modelos asociados, agregaciones con agrupamiento, subconsultas y operaciones por lotes. Estas capacidades permiten expresar consultas complejas manteniendo legibilidad.

## Flujo de Sincronización

### Estrategias de Deployment
Diferentes enfoques según el entorno: alteración automática en desarrollo versus migraciones explícitas en producción. La sincronización balancea conveniencia con control y seguridad.

### Control de Versiones de Esquema
Mecanismos para detectar y resolver discrepancias entre modelos definidos y esquema actual, previniendo errores de inconsistencia durante la evolución de la aplicación.

## Patrones de Gobernanza

### Gestión de Estados
Seguimiento del estado actual de migraciones mediante tablas de metadatos, permitiendo ejecución incremental y control de dependencias.

### Manejo de Errores
Estrategias para fallos durante migraciones: rollback automático, recuperación manual y resolución de conflictos en entornos colaborativos.

### Coordinación en Equipos
Mecanismos para evitar conflictos en desarrollo paralelo, incluyendo convenciones de nomenclatura y gestión de dependencias entre migraciones.

## Flujo de Evolución del Sistema

### Refactorización de Base de Datos
Técnicas para modificar esquemas existentes sin pérdida de datos, incluyendo migración gradual de columnas, tablas temporales y transformación de datos.

### Mantenimiento y Optimización
Operaciones periódicas como limpieza de datos, reconstrucción de índices y actualización de estadísticas, manteniendo rendimiento y salud del sistema.

### Auditoría y Documentación
Registro de cambios estructurales, impacto en rendimiento y dependencias entre migraciones, facilitando comprensión y mantenimiento a largo plazo.