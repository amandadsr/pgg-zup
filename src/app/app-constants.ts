export class AppConstants {


	
	public static get baseServidor(): string { return "http://localhost:8080/" }

	public static get baseLogin(): string { return this.baseServidor + "projetopgg/login" }

	public static get baseUrl(): string { return this.baseServidor + "projetopgg/usuario/" }


	
	//public static get baseServidor(): string { return "http://luissabenca.ddns.net:5339/" }

	//public static get baseLogin(): string { return this.baseServidor + "APIZUP/webresources/generic/login/" }

	//public static get baseUrl(): string { return this.baseServidor + "projetopgg/usuario/" }
}


