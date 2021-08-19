from django.shortcuts import render, redirect, reverse

# Create your views here.
def home(request):    
    return render(request, 'core/index.html')


def contact(request):
    request.session["errores"] = []
    request.session["email"] = ""
    request.session["nombre"] = ""
    request.session["ciudad"] = ""
    return render(request, 'core/contact.html')
    

def create_user(request):    
    if request.method == 'GET':
        return render(request, 'core/create_user.html')
    elif request.method == 'POST':
        errores = []
        email = request.POST["email"].strip()
        nombre = request.POST["nombre"].strip()
        ciudad = request.POST["ciudad"].strip()

        if len(email) == 0:
            errores.append("Please enter your email address")
        if len(nombre) == 0:
            errores.append("Please enter your name")
        if len(ciudad) == 0:
            errores.append("Please enter your native city")  

        if len(errores) == 0:                    
            request.session["email"] = email
            request.session["nombre"] = nombre
            request.session["ciudad"] = ciudad
            if 'contador' in request.session:
                request.session['contador'] += 1
            else:
                request.session['contador'] = 1
        else:
            request.session["errores"] = errores
        
        return redirect("/results")
        

def results(request):
    return render(request, 'core/results.html')

def projects(request):
    return render(request, 'core/projects.html')
