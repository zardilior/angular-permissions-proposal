Requerimentos:

1- Quiero poder limitar el acceso a nivel boton, pagina y endpoint de una forma facil
2- Quiero poder manejarlo como administrador facilmente
3- Quiero que el sistema permita en un futuro restringir permisos por atributos de usuario, es decir que ciertos accesos solo esten disponibles si el usuario tiene ciertas caracteristicas, como el paquete que se contrato, el rol del usuario
4- Quiero que lo anterior pueda ser overrided por un usuario admin de signot
5- Quiero mostrar esto en un demo guiado


Diseno:

Cada boton pagina y endpoint sera relacionado con un permiso (1)
Cada permiso se encontrara en un paquete, que sera solo para empaquetar permisos y poderlos manejar por paquete (2)(3)
Cada usuario se relacionara directamente con los permisos para permitir acceso a permisos individuales (3)
Los paquetes seran indicativos y se podran quitar y poner por un admin (4)
Se hara un demo sobre todo el portal de admin, crear y ver permisos, crear,ver paquetes de permisos y asignarles permisos asi como asignar permisos a usuarios (5)
Aunque en el demo no se muestre el chiste es que ciertos paquetes se den en automatico acceso en base a el rol, se separan dos permisos asignar paquetes de permisos y cambiar permisos para que se puedan cambiar y no cambiar los paquetes (3)
