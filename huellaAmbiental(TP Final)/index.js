var modalContainer = $(".modalContainer");
var overLay = $(".overLay");
var modalClose = $(".modalClose");
var formContainer = document.getElementById("formContainer");

var App = (function(){
    return{
        init: function(){
            document.getElementById("alimentario").addEventListener("click", function(){
                if (formContainer.hasChildNodes()) {
                    formContainer.innerHTML = "";
                }
                var form = document.createElement("form");
                form.setAttribute("class", "col-md-12 col-xs-4");
                var intro = document.createElement("h3");
                intro.innerHTML = "La generación de desechos de alimentos comienza desde la compra de los mismos.";
                var questions = [["¿Al comprar frutas y verduras, selecciono lo que voy a llevar en función de su aspecto estético?", 0, 1], 
                [" ¿Organizo mis compras armando una lista en base a lo que falta en mi hogar?", 1, 0], 
                [" ¿Cuándo como en un restaurant queda comida sobrante en mi plato?", 0, 1], 
                [" ¿Cuando compro productos lácteos, mantengo la cadena de frío durante el traslado?", 1, 0], 
                [" ¿Genero residuos de alimentos por no consumirlos antes de su fecha de vencimiento?", 0, 1], 
                [" Cuando utilizo mi heladera, ¿controlo la temperatura para optimizar la conservación de los alimentos?", 1, 0], 
                [" Cuando cargo el freezer ¿Realizo un análisis previo de los alimentos que voy a almacenar?", 1, 0],  
                [" ¿Guardo los cereales con cierre hermético?", 1, 0], 
                [" Luego de las comidas, y particularmente cuando organizo eventos festivos, ¿Sobran alimentos?", 0, 1], 
                [" ¿Guardo los restos de comidas?", 1, 0], 
                [" ¿Desecha las frutas golpeadas o marcadas?", 0, 1], 
                [" ¿Desecho cereales húmedos?", 0, 1], 
                [" ¿Desecho las frutas maduras?", 0, 1], 
                [" ¿Desecho el pan viejo?", 0, 1], 
                [" ¿Desecha los tomates maduros?", 0, 1], 
                [" ¿Utiliza utensilios especiales para pelar tubérculos y frutas?", 1, 0]];
                
                form.appendChild(intro);
                formContainer.appendChild(form);

                for (var i = 0; i < questions.length; i++) {
                    App.createFormOptionA(i, questions[i][0], questions[i][1], questions[i][2]);
                };

                var sendButton = document.createElement("button");
                sendButton.setAttribute("class", "col-xs-offset-1 col-xs-2");
                sendButton.innerText = "Calcular";
                sendButton.addEventListener("click", function(){
                    App.optionA();
                    modalContainer.toggle();
                });

                formContainer.appendChild(sendButton);
            });

            document.getElementById("agua").addEventListener("click", function(){
                if (formContainer.hasChildNodes()) {
                    formContainer.innerHTML = "";
                }
                var intro = document.createElement("h3");
                intro.innerHTML = "El volumen y patrón de consumo y la huella de agua de cada uno de los productos que se consumen son los factores principales que determinan la Huella de Agua de una persona. La Huella de agua de una persona considera dos componentes, una directa y una indirecta. A modo de ejemplo, al consumir carne, hablamos de huella de agua directa cuando nos referimos al volumen de agua consumido o contaminado cuando se prepara y cocina la carne. La huella de agua indirecta del consumidor de carne depende de las huellas directas de agua del intermediario que prepara la carne para ponerla en el mercado, del distribuidor, del criadero del ganado y de los cultivos que se utilizaron para alimentar al animal.";
                var form = document.createElement("form");
                form.setAttribute("class", "col-md-12 col-xs-44");
                var questions = ["1) ¿Cuántas personas habitan la vivienda de forma normal y habitual?",
                    "2) ¿Cuántas veces a la semana lava los platos a mano? Se consideran 4 comidas diarias.",
                    "3) ¿Cuántas veces a la semana utiliza el lavavajillas?",
                    "4) ¿Cuántos kg de carne consume semanalmente?",
                    "5) Si consume cereales (trigo, arroz, maíz, avena, harinas, pan), considerando 4 comidas diarias ¿En cuántas comidas los incluye en un día?",
                    "6) ¿Cuantos litros de leche consume semanalmente?",
                    "7) ¿Cuántos huevos consume semanalmente?",
                    "8) Si consume aceite (aceite de girasol, maíz, soja, oliva) considerando 4 comidas diarias ¿En cuántas comidas los incluye en un día?",
                    "9) Si consume azúcar considerando 4 comidas diarias ¿En cuántas comidas los incluye en un día?",
                    "10) Si consume edulcorante considerando 4 comidas diarias ¿En cuántas comidas los incluye en un día?",
                    "11) ¿Cuántos kg de verduras consume semanalmente?",
                    "12) ¿Cuántos kg de fruta consume semanalmente?",
                    "13) ¿Cuántas tazas de té Consume semanalmente?",
                    "14) ¿Cuántas tazas de café consume semanalmente?",
                    "15) ¿Cuántas litros de vino consume semanalmente?"
                ];
                form.appendChild(intro);
                formContainer.appendChild(form);

                for (var i = 0; i < questions.length; i++) {
                    App.createFormOptionB(i, questions[i]);
                }

                var sendButton = document.createElement("button");
                sendButton.setAttribute("class", "submit col-xs-offset-1 col-xs-2");
                sendButton.innerText = "Calcular";
                sendButton.addEventListener("click", function(){
                    App.optionB();
                    modalContainer.toggle();
                });

                formContainer.appendChild(sendButton);
            });

            document.getElementById("ecologica").addEventListener("click", function(){
                if (formContainer.hasChildNodes()) {
                    formContainer.innerHTML = "";
                }
                var intro = document.createElement("h3");
                intro.innerHTML = "La Huella Ecológica es el área necesaria para producir los productos consumidos y absorber los residuos generados. Considerando nuestros hábitos alimenticios refleja el área necesaria para: producir los vegetales, producir el forraje necesario para el alimento del ganado, producir el pescado que se consume.";
                var title = document.createElement("h4");
                title.innerHTML = "Elija que consumo tiene en cada opción";
                var form = document.createElement("form");
                form.setAttribute("class", "col-md-12 col-xs-44");
                var questions = ["cereales",
                    "raíces",
                    "azúcares",
                    "legumbres",
                    "nueces",
                    "vegetales",
                    "frutas",
                    "infusiones",
                    "especias",
                    "vino",
                    "carne",
                    "pescado",
                ];
                form.appendChild(intro);
                form.appendChild(title);
                formContainer.appendChild(form);

                for (var i = 0; i < questions.length; i++) {
                    App.createFormOptionC(i, questions[i]);
                }

                var sendButton = document.createElement("button");
                sendButton.setAttribute("class", "submit col-xs-offset-1 col-xs-2");
                sendButton.innerText = "Calcular";
                sendButton.addEventListener("click", function(){
                    App.optionC();
                    modalContainer.toggle();
                });

                formContainer.appendChild(sendButton);
            });
        },
        createFormOptionA: function(questionNumber, question, yes, no){
            questionNumber++;
            var formQ = document.createElement("div");
            formQ .setAttribute("id", "formQ" + questionNumber);
            var q = document.createElement("h4");
            q.innerHTML =  questionNumber + ") " + question;
            var labelRadioButtonQYes = document.createElement("label");
            labelRadioButtonQYes.innerHTML = "Si";
            var radioButtonQYes = document.createElement("input");
            radioButtonQYes.setAttribute("type", "radio");
            radioButtonQYes.setAttribute("name", "q" +  questionNumber);
            radioButtonQYes.setAttribute("value", yes);
            radioButtonQYes.setAttribute("checked", "checked");
            var labelRadioButtonQNo = document.createElement("label");
            labelRadioButtonQNo.innerHTML = "No";
            var radioButtonQNo = document.createElement("input");
            radioButtonQNo.setAttribute("type", "radio");
            radioButtonQNo.setAttribute("name", "q" +  questionNumber);
            radioButtonQNo.setAttribute("value", no);

            formQ.appendChild(q);
            formQ.appendChild(labelRadioButtonQYes);
            formQ.appendChild(radioButtonQYes);
            formQ.appendChild(labelRadioButtonQNo);
            formQ.appendChild(radioButtonQNo);

            formContainer.children[0].appendChild(formQ);
        },
        optionA: function(){
            var result;
            var resultNum = 0;
            var checkedInputs = document.querySelectorAll("input:checked");
            for (var i = 0; i < checkedInputs.length; i++) {
                if (checkedInputs[i].value == "1"){
                    resultNum = resultNum + 1;
                }
            }
            var percentage = (resultNum*100)/16;

            if (percentage >= 70){
                result = "¡Sus habitos son excelentes!";
                } else if(percentage >= 30){
                    result = "Tiene buenos habitos, pero son mejorables.";
                } else {
                    result = "Debe mejorar sus habitos alimenticios.";
                }

            while (document.getElementById("modal").querySelector("div").hasChildNodes()) {
                document.getElementById("modal").querySelector("div").removeChild(document.getElementById("modal").querySelector("div").lastChild);
            }

            var showRecomm = document.createElement("button");
            showRecomm.innerHTML = "Mostrar";
            showRecomm.addEventListener("click", function(){
                App.optionARecommendations();
                modalContainer.toggle();    
            });
            var msj = document.createElement("h3");
            msj.innerHTML = "Si desea conocer los consejos que tenemos para mejorar nuestros habitos alimenticios, presione Mostrar"
            var divResult = document.createElement("h3");
            divResult.innerHTML = result;
            document.getElementById("modal").querySelector("div").appendChild(divResult);
            document.getElementById("modal").querySelector("div").appendChild(msj);
            document.getElementById("modal").querySelector("div").appendChild(showRecomm);
        },optionARecommendations: function(){
            formContainer.innerHTML = "";
            var recommendations = [
                "Consuma fruta 'FEA'. Se desechan gran cantidad de frutas y verduras por su forma, tamaño o color. Comprando estas frutas en cualquier punto de venta estará consumiendo productos que de otra forma serían desperdiciados, generando impactos tanto en la etapa de producción de los mismos como también restando disponibilidad de alimentos para otras personas.",
                "Planifique sus comidas y utilice una lista. No compre más de lo que necesita. Mire su heladera y escriba una lista con los productos que necesite y que sabe que se van a consumir. Piense en comprar productos frescos en pequeñas cantidades más a menudo para poder disfrutarlos en su mejor momento.",
                "Pida llevar los restos y colóquelos en el freezer o heladera de su casa para poder consumirlo en otra ocasión. Elija medias porciones en restaurantes y bares.",
                "Lleve una bolsa conservadora para llevar los alimentos congelados del supermercado a casa especialmente en días de calor.",
                "No compre en exceso. Acuérdese de mirar las fechas de vencimiento para asegurarse que podrá usar los alimentos antes de que se estropeen.",
                "Acuérdese de mantener su heladera a una temperatura por debajo de los 5ºC. Las investigaciones muestran que hasta un 70% de las heladeras se mantienen a temperaturas demasiado altas, lo que supone que los alimentos no duren todo lo que deberían. Por ejemplo, la leche se estropea mucho antes si la heladera no se encuentra a la temperatura adecuada. Todos los productos lácteos deben ser refrigerados en un plazo de dos horas tras ser comprados, de aquí la importancia de mantener la cadena de frío. Conserve todos los productos lácteos en la heladera, a menos que haya planeado congelarlos. Mueva los alimentos de su heladera, de modo que tenga lo que tiene que ser consumido antes adelante y de esa forma, no se olvide de ello.",
                "Hay alimentos, como ser ciertas variedades de pan, que se conservan mejor en un lugar fresco y oscuro como en un armario o un cajón del pan. Asimismo, hay alimentos que no admiten ser descongelados y re-congelados (cuando compre alimentos congelados, no olvide acortar todo lo posible el período entre la compra y carga en el freezer), en cuyo caso si se prevé consumirlo en el corto plazo puede ser mejor opción refrigerarlo en heladera. Cuando congele alimentos, etiquételos y acomódelos de manera tal de tenerlos disponibles según su frecuencia de consumo y/o plazos de conservación en estado congelado.",
                "Guardando los cereales en recipientes herméticos se mantienen crocantes, extendiendo su vida útil y evitando la generación de desechos.",
                "Planifique las comidas en función de la cantidad de comensales y en ocasiones que deba calcular y prepararla en exceso, trate de hacerlo con aquellos platos o preparaciones cuya conservación minimice la necesidad de  desecharla y permita una  fácil conservación para su consumo futuro.",
                "Aproveche al máximo sus alimentos enfriando los restos lo más rápido posible después de cocinarlos y almacenándolos en la heladera. Consúmalos en los días subsiguientes, de ser posible, congélelos para ser aprovechados en otra ocasión. Buscar modos de aprovechar los restos de comidas anteriores es una manera de reducir los desechos alimenticios.",
                "Antes de desecharlas, realice preparaciones cuya presentación no dependan del aspecto de la fruta como por ejemplo ensaladas de frutas, licuados o compotas.",
                "Puede utilizarlos para hacer tortas u otras preparaciones pasteleras.",
                "Puede cortarlas y congelarlas para hacer licuados y helados.",
                "Puede utilizarlo para budines, rebozadores y otros complementos útiles en la elaboración de comidas.",
                "Puede utilizarlos para hacer salsas y sopas.",
                "Evite la utilización de cuchillos ya que generan mucho desperdicio de alimento arrastrado en la cáscara separada."
            ];
            var ol = document.createElement("ol");
            var h3 = document.createElement("h3");
            h3.innerHTML = "Consejos para tener una mejor habito alimenticio:";
            formContainer.appendChild(h3);
            for (var i = 0; i < recommendations.length; i++) {
                var li = document.createElement("li");
                li.innerHTML = recommendations[i];
                ol.appendChild(li);
            }
            formContainer.appendChild(ol);
        },createFormOptionB: function(questionNumber, question){
            questionNumber++;
            var formQ = document.createElement("div");
            formQ .setAttribute("id", "formQ" + questionNumber);
            var divLabel = document.createElement("div");
            divLabel.setAttribute("class", "col-md-12 col-xs-12");
            var label = document.createElement("label");
            label.innerHTML = question;
            var divInput = document.createElement("div");
            divInput.setAttribute("class", "col-md-1 col-xs-4");
            var input = document.createElement("input");
            input.setAttribute("type", "number");
            if (questionNumber == 1) {
                input.setAttribute("min", "1");
            } else{
                input.setAttribute("min", "0");
            }
            
            input.setAttribute("class","form-control");

            divLabel.appendChild(label);
            formQ.appendChild(divLabel);
            divInput.appendChild(input);
            formQ.appendChild(divInput);
            formContainer.children[0].appendChild(formQ);
        },optionB: function(){
            var inputs = document.querySelectorAll("input");
            
            huellaDirecta = ((inputs[1].value * 400 / inputs[0].value) + (inputs[2].value * 136 / inputs[0].value));
            huellaIndirecta = ((inputs[3].value * 297524 + inputs[3].value * 16668 + inputs[3].value * 4368) + (inputs[4].value * 5210.42+ inputs[4].value* 142.5 + inputs[4].value * 316.875) + (inputs[5].value * 2232.816 + inputs[5].value * 98.688 + inputs[5].value * 49.344) + (inputs[6].value * 324.672 + inputs[6].value * 11.136 + inputs[6].value * 14.976) + (inputs[7].value * 1452.08 + inputs[7].value * 24.375 + inputs[7].value * 15.42) + (inputs[8].value * 588.125 + inputs[8].value * 179.58 + inputs[8].value * 49.16) + (inputs[9].value * 1414.58 + inputs[9].value * 136.25) + (inputs[10].value * 14452 + inputs[10].value * 1504 + inputs[10].value * 1004) + (inputs[11].value * 22624 + inputs[11].value * 5916 + inputs[11].value * 1656) + (inputs[12].value * 76.37 + inputs[12].value * 12.17 + inputs[12].value * 2.84) + (inputs[13].value * 323.9 + inputs[13].value * 4.984 + inputs[10].value * 0.952) + (inputs[14].value * 973.072 + inputs[14].value * 1399.788 + inputs[11].value * 227.316));
            huellaAgua = huellaDirecta + huellaIndirecta;

            while (document.getElementById("modal").querySelector("div").hasChildNodes()) {
                document.getElementById("modal").querySelector("div").removeChild(document.getElementById("modal").querySelector("div").lastChild);
            }

            var p1 = document.createElement("h3");
            p1.innerHTML = "La huella de agua directa es de " +  huellaDirecta + " litros de agua por mes.";
            var p2 = document.createElement("h3");
            p2.innerHTML = "La huella de agua indirecta es de " + huellaIndirecta + " litros de agua por mes";
            var p3 = document.createElement("h3");
            p3.innerHTML = "La huella de agua total es de " + huellaAgua + " litros de agua por mes";
            document.getElementById("modal").querySelector("div").appendChild(p1);
            document.getElementById("modal").querySelector("div").appendChild(p2);
            document.getElementById("modal").querySelector("div").appendChild(p3);
        },createFormOptionC: function(questionNumber, question){
            questionNumber++;
            var formQ = document.createElement("div");
            formQ .setAttribute("id", "formQ" + questionNumber);
            var q = document.createElement("h4");
            q.innerHTML =  questionNumber + ") " + question;
            var labelRadioButtonQAlto = document.createElement("label");
            labelRadioButtonQAlto.innerHTML = "Alto";
            var radioButtonQAlto = document.createElement("input");
            radioButtonQAlto.setAttribute("type", "radio");
            radioButtonQAlto.setAttribute("name", "q" +  questionNumber);
            radioButtonQAlto.setAttribute("value", "alto");
            radioButtonQAlto.setAttribute("checked", "checked");
            var labelRadioButtonQMedio = document.createElement("label");
            labelRadioButtonQMedio.innerHTML = "Medio";
            var radioButtonQMedio = document.createElement("input");
            radioButtonQMedio.setAttribute("type", "radio");
            radioButtonQMedio.setAttribute("name", "q" +  questionNumber);
            radioButtonQMedio.setAttribute("value", "medio");
            var labelRadioButtonQBajo = document.createElement("label");
            labelRadioButtonQBajo.innerHTML = "Bajo";
            var radioButtonQBajo = document.createElement("input");
            radioButtonQBajo.setAttribute("type", "radio");
            radioButtonQBajo.setAttribute("name", "q" +  questionNumber);
            radioButtonQBajo.setAttribute("value", "bajo");


            formQ.appendChild(q);
            formQ.appendChild(labelRadioButtonQAlto);
            formQ.appendChild(radioButtonQAlto);
            formQ.appendChild(labelRadioButtonQMedio);
            formQ.appendChild(radioButtonQMedio);
            formQ.appendChild(labelRadioButtonQBajo);
            formQ.appendChild(radioButtonQBajo);

            formContainer.children[0].appendChild(formQ);
        },optionC: function(){
            var Values = [
                {   
                    high: 0.14676 * 0.9516,
                    mid: 0.1223 * 0.9516,
                    low: 0.09784 * 0.9516,
                    footprint: 0
                },{   
                    high: 0.0564 * 0.115,
                    mid: 0.047 * 0.115,
                    low: 0.0376 * 0.115,
                    footprint: 0
                },{   
                    high: 0.04968 * 0.04396,
                    mid: 0.0414 * 0.04396,
                    low: 0.03312 * 0.04396,
                    footprint: 0
                },{   
                    high: 0.0006 * 2.3145,
                    mid: 0.0005 * 2.3145,
                    low: 0.0004 * 2.3145,
                    footprint: 0
                },{   
                    high: 0.00048 * 1.086,
                    mid: 0.0004 * 1.086,
                    low: 0.00032 * 1.086,
                    footprint: 0
                },{   
                    high: 0.01776 * 4.288,
                    mid: 0.0148 * 4.288,
                    low: 0.01184 * 4.288,
                    footprint: 0
                },{   
                    high: 0.08352 * 0.16547,
                    mid: 0.0696 * 0.16547,
                    low: 0.05568 * 0.16547,
                    footprint: 0
                },{   
                    high: 0.0096 * 1.867,
                    mid: 0.008 * 1.867,
                    low: 0.0064 * 1.867,
                    footprint: 0
                },{   
                    high: 0.0024 * 2.4344,
                    mid: 0.002 * 2.4344,
                    low: 0.0016 * 2.4344,
                    footprint: 0
                },{   
                    high: 0.02892 * 0.3198,
                    mid: 0.0241 * 0.3198,
                    low: 0.01928 * 0.3198,
                    footprint: 0
                },{   
                    high: 0.06588 * 0.02208,
                    mid: 0.0549 * 0.02208,
                    low: 0.04392 * 0.02208,
                    footprint: 0
                },{   
                    high: 0.00684 * 15.98,
                    mid: 0.0057 * 15.98,
                    low: 0.00456 * 15.98,
                    footprint: 0
                }
            ];

            var checkedInputs = document.querySelectorAll("input:checked");
            var huellaEcologica = 0;
            for (var i = 0; i < checkedInputs.length; i++) {
                Values[i]["footprint"] = Values[i][checkedInputs[i].value];
            }
            for (var i = 0; i < Values.length; i++) {
                huellaEcologica += Values[i]["footprint"];
            }

            while (document.getElementById("modal").querySelector("div").hasChildNodes()) {
                document.getElementById("modal").querySelector("div").removeChild(document.getElementById("modal").querySelector("div").lastChild);
            }
            var h3 = document.createElement("h3");
            h3.innerHTML = "Su huella ecologica es de " + huellaEcologica + " hectareas por año"
            document.getElementById("modal").querySelector("div").appendChild(h3);
        }
    }
})();

overLay.click(function(){
    modalContainer.toggle();
});

modalClose.click(function(){
    modalContainer.toggle();
}); 

window.onload = function(){
    App.init();
}

    