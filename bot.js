let userData = {
    nomeCliente: '',
    nomePet: '',
    servicos: '',
    contato: ''
}

let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');

    const savedData = localStorage.getItem('petcare_lead') ? JSON.parse(localStorage.getItem('petcare_lead')) : false;
    if (savedData) {
        const btn = document.createElement('button');
        btn.id = 'floating-chat-btn';
        
        btn.className = `
            fixed bottom-6 right-6 z-[100]
            bg-blue-600 text-white p-4 rounded-full shadow-2xl 
            hover:bg-blue-700 hover:scale-110 active:scale-95 
            transition-all duration-300 flex items-center justify-center
            shadow-lg
        `;

        const whatsappIcon = `
            <span class="mr-4" id="user_name_on_btn">Olá ${savedData.nomeCliente.toUpperCase()}</span>
            <svg style="width:32px; height:32px;" viewBox="0 0 24 24" id="meteor-icon-kit__regular-whatsapp" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5129 3.4866C18.2882 1.24722 15.2597 -0.00837473 12.1032 4.20445e-05C5.54964 4.20445e-05 0.216056 5.33306 0.213776 11.8883C0.210977 13.9746 0.75841 16.0247 1.80085 17.8319L0.114014 23.9932L6.41672 22.34C8.15975 23.2898 10.1131 23.7874 12.0981 23.7874H12.1032C18.6556 23.7874 23.9897 18.4538 23.992 11.8986C24.0022 8.74248 22.7494 5.71347 20.5129 3.4866ZM12.1032 21.7768H12.0992C10.3294 21.7776 8.59195 21.3025 7.06888 20.4012L6.70803 20.1874L2.96836 21.1685L3.96713 17.52L3.73169 17.1461C2.74331 15.5709 2.22039 13.7484 2.22328 11.8889C2.22328 6.44185 6.65615 2.00783 12.1072 2.00783C14.7284 2.00934 17.2417 3.05207 19.0941 4.90662C20.9465 6.76117 21.9863 9.27564 21.9848 11.8969C21.9825 17.3456 17.5496 21.7768 12.1032 21.7768ZM17.5234 14.3755C17.2264 14.2267 15.7659 13.5085 15.4934 13.4064C15.2209 13.3044 15.0231 13.2576 14.8253 13.5552C14.6275 13.8528 14.058 14.5215 13.8847 14.7199C13.7114 14.9182 13.5381 14.9427 13.241 14.794C12.944 14.6452 11.9869 14.3316 10.8519 13.3198C9.96884 12.5319 9.36969 11.5594 9.19867 11.2618C9.02765 10.9642 9.18043 10.8057 9.32922 10.6552C9.46261 10.5224 9.62622 10.3086 9.77444 10.1348C9.92266 9.9609 9.97283 9.83776 10.0714 9.63938C10.1701 9.44099 10.121 9.26769 10.0469 9.1189C9.97283 8.97011 9.37824 7.50788 9.13083 6.9133C8.88969 6.3341 8.64513 6.4122 8.46271 6.40023C8.29169 6.39168 8.09102 6.38997 7.89264 6.38997C7.58822 6.39793 7.30097 6.53267 7.10024 6.76166C6.82831 7.05923 6.061 7.77752 6.061 9.23976C6.061 10.702 7.12532 12.1146 7.27354 12.313C7.42176 12.5114 9.36855 15.5117 12.3472 16.7989C12.9004 17.0375 13.4657 17.2468 14.0409 17.426C14.7523 17.654 15.3999 17.6204 15.9118 17.544C16.4819 17.4585 17.6694 16.8251 17.9173 16.1313C18.1653 15.4376 18.1648 14.8424 18.0884 14.7187C18.012 14.595 17.8204 14.5266 17.5234 14.3778V14.3755Z" fill="#fff"/>
            </svg>
        `;
        btn.innerHTML = whatsappIcon;

        btn.onclick = () => {
            const whatsMessage = `Olá! sou o ${savedData.nomeCliente}, já nos falamos antes, eu quero o serviço ${savedData.servicos} para o ${savedData.nomePet}.`;
            const whatsUrl = `https://api.whatsapp.com/send?phone=5545991499483&text=${encodeURIComponent(whatsMessage)}`;
            window.open(whatsUrl, true);
        };

        document.body.appendChild(btn);
    }

    chatContainer.innerHTML = `<div class="max-w-xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        <div class="bg-blue-600 p-4 text-white font-bold flex justify-between items-center">
            <span>🐾 Assistente PetCare IA</span>
            <span class="text-xs bg-blue-500 px-2 py-1 rounded-full animate-pulse">Online</span>
        </div>
        <div id="chat-window" class="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50 text-left flex flex-col">
            <div class="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-[80%] self-start shadow-sm">
                Olá! Sou o assistente virtual da PetCare. Para começarmos, qual o seu nome?
            </div>
        </div>
        <div class="p-4 border-t flex gap-2 bg-white">
            <input type="text" id="user-input" placeholder="Digite sua resposta..." 
                class="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700">
            <button id="send-btn" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-bold">
                Enviar
            </button>
        </div>
    </div>`;

    const chatWindow = document.getElementById('chat-window');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    const botFlow = [
        { field: "nomeCliente" },
        { question: (userData) => `Prazer, ${userData.nomeCliente}! E como se chama o seu pet?`, field: "nomePet" },
        { question: "Qual serviço você procura? (Banho, Tosa ou Veterinário)", field: "servicos" },
        { question: "Perfeito. Por último, qual seu WhatsApp para confirmarmos o horário?", field: "contato" }
    ];

    function addMessage(text, isUser = false) {
        const msg = document.createElement('div');
        msg.className = isUser 
            ? "bg-blue-600 text-white p-3 rounded-lg max-w-[80%] self-end shadow-md mb-2" 
            : "bg-gray-200 text-gray-800 p-3 rounded-lg max-w-[80%] self-start shadow-sm mb-2";
        msg.innerText = text;
        chatWindow.appendChild(msg);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    async function processAnswer() {
        const answer = userInput.value.trim();
        if (!answer) {
            return;
        }

        addMessage(answer, true);
        userInput.value = '';

        const fieldToSave = botFlow[currentIndex].field;
        userData[fieldToSave] = answer;

        localStorage.setItem('petcare_lead', JSON.stringify(userData));

        currentIndex++;

        setTimeout(() => {
            if (currentIndex < botFlow.length) {
                const nextPhase = botFlow[currentIndex].question;
                addMessage(typeof nextPhase === 'function' ? nextPhase(userData) : nextPhase);
            } else {
                endConversation();
            }
        }, 800);
    }

    function endConversation() {
        addMessage("Obrigado! Gerando seu agendamento... 🚀");
        
        setTimeout(() => {
            const textMessage = `Olá! Meu nome é ${userData.nomeCliente}. Quero agendar ${userData.servicos} para o ${userData.nomePet}.`;
            const whatsUrl = `https://api.whatsapp.com/send?phone=5545991499483&text=${encodeURIComponent(textMessage)}`;

            addMessage(`Tudo pronto! Clique no botão para finalizar:`);
            
            const btnZap = document.createElement('a');
            btnZap.href = whatsUrl;
            btnZap.target = "_blank";
            btnZap.className = "bg-green-500 text-white p-3 rounded-lg font-bold text-center mt-2 hover:bg-green-600 transition";
            btnZap.innerText = "Chamar no WhatsApp 🐾";
            chatWindow.appendChild(btnZap);
        }, 1500);
    }

    sendBtn.addEventListener('click', processAnswer);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            processAnswer();
        }
    });
});