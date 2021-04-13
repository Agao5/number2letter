
function num2ltr(nbr)
{/******
Cette fonction converti un nombre allant de zero a mille
Attention ! envoyez a la fonction: des entiers uniquement !
******/
	nombre=parseInt(nbr,10);
	if(isNaN(nombre) || nombre>1000 || nombre<0)
	{/*le cas où l'utilisateur n'as pas entrer un nombre ou le nombre
	n'est pas dans la gamme de conversion*/
		return 'vous devez entrer seulement les nombre compris entre 0 et 1000 \n\n vous avez mis: '+nbr;
	}
	//Creation des variables utiles a la fonction
	var tab_unites,tab_dizaines,unites,dizaines,centaines,units,dizs,cents,lettres,dixs,exept;
	//gerer un zero et un mille avant de s'embeter
	if(nombre==0)
	{
		//on retourne zero !
		return 'Zero';
	}
	if(nombre==1000)
	{
		return 'Mille';
	}
	//creation des tableaux utiles a la fonction
	//dix a seize sont ajoutes dans les unites en raison de facilites
	tab_unites=[' ','un','deux','trois','quatre','cinq','six','sept','huit','neuf','dix','onze','douze','treize','quatorze','quinze','seize'];
	tab_dizaines=[' ','dix','vingt','trente','quarente','cinquente','soixante','soixante','quatre-vingt','quatre-vingt'];
	//analyse du nombre
	units=nombre%10;
	dizs=(nombre%100-units)/10;
	cents=(nombre%1000-nombre%100)/100;
	//conversion
	//traitement des unites
	if(dizs==0&&cents==0)
	{
		return tab_unites[units];;
	}
	else
	{
		unites=tab_unites[units];
	}
	//traitement des dizaines
	//les cas où il n'y as pas des cents
	if(dizs>0)
	{
		if(dizs==7||dizs==9)
		{
			dizaines=tab_dizaines[dizs]+'-dix';
		}
		else
		{
			dizaines=tab_dizaines[dizs];
		}
		if(cents==0&&units==0)
		{
			return dizaines;
		}
	}
	if(units>0&&dizs>0)
	{
		if(units<7&&(dizs==1||dizs==7||dizs==9))
		{
			if(dizs==1)
			{
				exept=tab_unites[10+units];
			}
			else
			{
				
			 	exept=tab_dizaines[dizs]+'-'+tab_unites[units+10];
			}
			if(cents==0)
			{
				return exept;
			}
		}
		else
		{
			
			if(dizs!=8&&units==1)
			{
				dixs=dizaines+'-et-'+unites;
			}
			else
			{
				dixs=dizaines+'-'+unites;
			}
			if(cents==0)
			{
				return dixs;
			}
			
		}
	}
	//traitement de centaines
	if(cents>0)
	{
		if(cents==1)
		{
			centaines='cent';
		}
		else
		{
			centaines=tab_unites[cents]+'-cent';
		}
		if(units==0&&dizs==0)
		{
			return centaines;
		}
		else if(dizs==0)
		{
			return centaines+'-et-'+unites;
		}
		else if(units==0){
		return centaines+'-'+dizaines;
		}
	}
	//retour de la reponse
	if(exept)
	{
		lettres=centaines+'-'+exept;
	}
	else
	{
		lettres=centaines+'-'+dixs;
	}
	return lettres;
}