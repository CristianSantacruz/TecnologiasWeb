/*==============================================================*/
/* DBMS name:      Microsoft SQL Server 2005                    */
/* Created on:     13/12/2016 19:06:13                          */
/*==============================================================*/


if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('RESERVAS') and o.name = 'FK_RESERVAS_RESERVAS__CLIENTE')
alter table RESERVAS
   drop constraint FK_RESERVAS_RESERVAS__CLIENTE
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('RESERVAS') and o.name = 'FK_RESERVAS_RESERVAS__SERVICIO')
alter table RESERVAS
   drop constraint FK_RESERVAS_RESERVAS__SERVICIO
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('RESERVAS') and o.name = 'FK_RESERVAS_RESERVAS__SUCURSAL')
alter table RESERVAS
   drop constraint FK_RESERVAS_RESERVAS__SUCURSAL
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SUGERENCIAS') and o.name = 'FK_SUGERENC_PERSONA_S_PERSONA')
alter table SUGERENCIAS
   drop constraint FK_SUGERENC_PERSONA_S_PERSONA
go

if exists (select 1
            from  sysobjects
           where  id = object_id('CLIENTE')
            and   type = 'U')
   drop table CLIENTE
go

if exists (select 1
            from  sysobjects
           where  id = object_id('PERSONA')
            and   type = 'U')
   drop table PERSONA
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('RESERVAS')
            and   name  = 'RESERVAS_SERVICIO_FK'
            and   indid > 0
            and   indid < 255)
   drop index RESERVAS.RESERVAS_SERVICIO_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('RESERVAS')
            and   name  = 'RESERVAS_SUCURSALES_FK'
            and   indid > 0
            and   indid < 255)
   drop index RESERVAS.RESERVAS_SUCURSALES_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('RESERVAS')
            and   name  = 'RESERVAS_CLIENTE_FK'
            and   indid > 0
            and   indid < 255)
   drop index RESERVAS.RESERVAS_CLIENTE_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('RESERVAS')
            and   type = 'U')
   drop table RESERVAS
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SERVICIO')
            and   type = 'U')
   drop table SERVICIO
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SUCURSALES')
            and   type = 'U')
   drop table SUCURSALES
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SUGERENCIAS')
            and   name  = 'PERSONA_SUGERENCIA_FK'
            and   indid > 0
            and   indid < 255)
   drop index SUGERENCIAS.PERSONA_SUGERENCIA_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SUGERENCIAS')
            and   type = 'U')
   drop table SUGERENCIAS
go

/*==============================================================*/
/* Table: CLIENTE                                               */
/*==============================================================*/
create table CLIENTE (
   IDCLIENTE            varchar(5)           not null,
   NOMBRECLIENTE        varchar(30)          not null,
   TELEFONOCLIENTE      text                 not null,
   EMAILCLIENTE         varchar(50)          not null,
   EMPRESACLIENTE       varchar(20)          not null,
   constraint PK_CLIENTE primary key nonclustered (IDCLIENTE)
)
go

/*==============================================================*/
/* Table: PERSONA                                               */
/*==============================================================*/
create table PERSONA (
   IDPERSONA            varchar(5)           not null,
   NOMBREPERSONA        varchar(20)          not null,
   TELEFONOPERSONA      text                 not null,
   EMAILPERSONA         varchar(50)          not null,
   PAISPERSONA          varchar(15)          not null,
   CIUDADPERSONA        varchar(15)          not null,
   constraint PK_PERSONA primary key nonclustered (IDPERSONA)
)
go

/*==============================================================*/
/* Table: RESERVAS                                              */
/*==============================================================*/
create table RESERVAS (
   IDRESERVA            varchar(5)           not null,
   IDSUCURSAL           varchar(5)           not null,
   IDSERVICIO           varchar(5)           not null,
   IDCLIENTE            varchar(5)           not null,
   FECHARESERVA         datetime             not null,
   HORARESERVA          datetime             not null,
   constraint PK_RESERVAS primary key nonclustered (IDRESERVA)
)
go

/*==============================================================*/
/* Index: RESERVAS_CLIENTE_FK                                   */
/*==============================================================*/
create index RESERVAS_CLIENTE_FK on RESERVAS (
IDCLIENTE ASC
)
go

/*==============================================================*/
/* Index: RESERVAS_SUCURSALES_FK                                */
/*==============================================================*/
create index RESERVAS_SUCURSALES_FK on RESERVAS (
IDSUCURSAL ASC
)
go

/*==============================================================*/
/* Index: RESERVAS_SERVICIO_FK                                  */
/*==============================================================*/
create index RESERVAS_SERVICIO_FK on RESERVAS (
IDSERVICIO ASC
)
go

/*==============================================================*/
/* Table: SERVICIO                                              */
/*==============================================================*/
create table SERVICIO (
   IDSERVICIO           varchar(5)           not null,
   TIPOSERVICIO         varchar(15)          not null,
   constraint PK_SERVICIO primary key nonclustered (IDSERVICIO)
)
go

/*==============================================================*/
/* Table: SUCURSALES                                            */
/*==============================================================*/
create table SUCURSALES (
   IDSUCURSAL           varchar(5)           not null,
   CIUDAD               varchar(15)          not null,
   constraint PK_SUCURSALES primary key nonclustered (IDSUCURSAL)
)
go

/*==============================================================*/
/* Table: SUGERENCIAS                                           */
/*==============================================================*/
create table SUGERENCIAS (
   IDMENSAJE            varchar(5)           not null,
   IDPERSONA            varchar(5)           not null,
   MENSAJE              varchar(150)         not null,
   constraint PK_SUGERENCIAS primary key nonclustered (IDMENSAJE)
)
go

/*==============================================================*/
/* Index: PERSONA_SUGERENCIA_FK                                 */
/*==============================================================*/
create index PERSONA_SUGERENCIA_FK on SUGERENCIAS (
IDPERSONA ASC
)
go

alter table RESERVAS
   add constraint FK_RESERVAS_RESERVAS__CLIENTE foreign key (IDCLIENTE)
      references CLIENTE (IDCLIENTE)
go

alter table RESERVAS
   add constraint FK_RESERVAS_RESERVAS__SERVICIO foreign key (IDSERVICIO)
      references SERVICIO (IDSERVICIO)
go

alter table RESERVAS
   add constraint FK_RESERVAS_RESERVAS__SUCURSAL foreign key (IDSUCURSAL)
      references SUCURSALES (IDSUCURSAL)
go

alter table SUGERENCIAS
   add constraint FK_SUGERENC_PERSONA_S_PERSONA foreign key (IDPERSONA)
      references PERSONA (IDPERSONA)
go

