# UEE Test Project
### Chat
1. Create state module, State module send message "Update State of Module", "Load State of Module"
3. Create history module, get state and compare old state
4. History module send event "Save DB object", write object name in const entity 
5.  History module get message "Load State of Module" and send "Get DB Object", write object name in const entity 
6.  Add in payload and signature Event const "Entity"
7.  Create DB module, get message  "Get DB  Object", "Save DB  Object", get object name in const entity 
8.  DB send event "Update DB Object", write object name in const entity
9.  Chat show extends state module
10. Chat with history
11. Chat with Auth
12. Create several chats

### First game
1. Zero-cross game