import bcrypt from "bcrypt";
import { getDayOfYear } from "date-fns";
import { getRepository } from "typeorm";
import { User } from "../models/user.model";
import { createUser } from "../use-cases/user.use-case";

/**
 * Función para cifrar una contraseña.
 * @param password La contraseña a cifrar.
 * @returns Una promesa que se resuelve con la contraseña cifrada.
 */
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

/**
 * Función para descifrar una contraseña.
 * @param password La contraseña cifrada.
 * @param hash La contraseña original cifrada.
 * @returns Una promesa que se resuelve con un booleano que indica si las contraseñas coinciden.
 */
export async function comparePasswords(
  password: string,
  hash: string
): Promise<boolean> {
  const match = await bcrypt.compare(password, hash);
  return match;
}

/**
 * return day difference between two dates
 * @param date1 
 * @param date2 
 * @returns 
 */
export function returnDaysBetweenTwoDates(date1: string, date2: string): number {
  const dayInMs = 24 * 60 * 60 * 1000; // Cantidad de milisegundos en un día
  const time1 = new Date(date1).getTime(); // Convertir fecha 1 a milisegundos
  const time2 = new Date(date2).getTime(); // Convertir fecha 2 a milisegundos
  const diffTime = Math.abs(time2 - time1); // Obtener la diferencia de tiempo en milisegundos
  const diffDays = Math.ceil(diffTime / dayInMs); // Obtener la cantidad de días redondeando hacia arriba
  return diffDays;
}

/**
 * 
 * @param dateString returns if is today
 * @returns 
 */
export function isToday(dateString: string): boolean {
  const date = new Date(dateString);
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}


export function sameDayOfYear(date1: string, date2: string): boolean {
  const dayOfYear1 = getDayOfYear(new Date(date1));
  const dayOfYear2 = getDayOfYear(new Date(date2));
  return dayOfYear1 === dayOfYear2;
}

export async function generateDefaultData() {
  await createUser({
    email: "jebarcasnegras@uninorte.edu.co",
    password: "contraseña",
    name: "Jair ",
    lastName: "Barcasnegras",
    progresoCurso1: 100,
    notaCurso1: 4.8
  });

  await createUser({
    email: "lombardim@uninorte.edu.co",
    password: "contraseña",
    name: "Miguel ",
    lastName: "Lombardi",
    progresoCurso1: 100,
    notaCurso1: 4.5,
    progresoCurso2: 50,
  });

  await createUser({
    email: "elsanti@gmail.com",
    password: "contraseña",
    name: "Santi",
    lastName: "Vargas"
  });

  await createUser({
    email: "ambg@hotmail.com",
    password: "contraseña",
    name: "Amelia",
    lastName: "García"
  });
}