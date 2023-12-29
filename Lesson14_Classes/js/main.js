class ListNode{
    constructor(){
        this.value = undefined;
        this.next = undefined;
    }
}

class List{
    constructor(){
        this.head = NaN;
    }
    
    insert(val){
        
        const newNode = new ListNode();
        newNode.value = val;
        
        if(this.head == undefined){
            this.head = newNode;
        }
        else{
            newNode.next =this.head;
            this.head = newNode;
        }
    }

    printList(){
        let temp = this.head;

        while(temp!=undefined){
            console.log(temp.value);
            temp = temp.next;
        }
    }
}

const list = new List();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.printList();

class container{
    #var;
    constructor(){
        this.#var=1;
    }

    getVar(){
        return this.#var;
    }

}

const obj1 = new container();

console.log(obj1.getVar());

//Factory Function
function createPerson(firstName, lastName) {
    
    return {
      name: ()=> {
        return firstName + ' ' + lastName;
      },
    };
  }
  
  let person1 = createPerson('John', 'Doe');
  let person2 = createPerson('Jane', 'Doe');
 console.log( person1.name());