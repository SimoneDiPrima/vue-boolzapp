
const friends = new Vue({
    el:`#listFriends`,
    name:`My First App`,
    data:{
        currentIndex : 0,
        searchFriend : ``,
        user: {
            name: 'Simone',
            avatar: '_io',
          },
          newMessages:{
            text:``,
            date: dayjs().format(`DD-MM-YYYY HH:mm:ss`),
            status:`sent`
          },
          contacts: [
            {
              name: 'Michele',
              avatar: '_1',
              visible: true,
              messages: [{
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
              },
              {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
              }
              ],
            },
            {
              name: 'Fabio',
              avatar: '_2',
              visible: true,
              messages: [{
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
              },
              {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
              },
              {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'received'
              }
              ],
            },
            {
              name: 'Samuele',
              avatar: '_3',
              visible: true,
              messages: [{
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received'
              },
              {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
              },
              {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
              }
              ],
            },
            {
              name: 'Luisa',
              avatar: '_4',
              visible: true,
              messages: [{
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
              }
              ],
            },
          ]
        },
        methods:{
        
         goToChat(index){
         return this.currentIndex = index;
         },
        
         addMessages(){
          if(!this.newMessages.text)return;
           const addedMessages = {text:this.newMessages,date:this.date,status:this.status}
            this.contacts[this.currentIndex].messages.push(addedMessages.text)
            this.newMessages = ``;

          // funzione per risposta automatica(da rivedere nella versione bootstrap)
          setTimeout(()=>{     
            for(i=0;i<100;i++){
              const autoMessage = {
                text: `ok`,
                 date: dayjs().format(`DD-MM-YYYY HH:mm:ss`),
                 status: 'received'
               }
               return this.contacts[this.currentIndex].messages.push(autoMessage)
            }
          },1000)
         },
         searchFriends(face){
          if(this.searchFriend === `` ) return true;
          else{
            return face.name.toLowerCase().includes(this.searchFriend);
          }
         }
    }})