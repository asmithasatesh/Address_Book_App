//Usecase 4: Add getter and setter for all form properties
class ContactPerson
{
    get id()
    {
        return this._id;
    }
    set id(id)
    {
        this._id=id;
    }

    get fullName()
    {
        return this._fullName;
    }
    set fullName(fullName)
    {
       let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}([\\s]?[A-Za-z]{1,})*$');
       if(nameRegex.test(fullName))
       {
        this._fullName=fullName;
       }
       else
       {
         throw 'Name is Incorrect';
       }

    }

    get phoneNumber()
    {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber)
    {
        let phoneRegex=RegExp('^[1-9]{2}\\s[1-9][0-9]{9}$');
        if(phoneRegex.test(phoneNumber))
        {
            this._phoneNumber=phoneNumber;
        }
        else
        {
          throw 'Phone Number is Incorrect';
        }
    }

    get zip()
    {
        return this._zip;
    }
    set zip(zip)
    {
        {
            let zipRegex=RegExp('^[1-9][0-9]{2}\\s{0,1}[0-9]{3}$');
            if(zipRegex.test(zip))
            {
                this._zip=zip;
            }
            else
            {
              throw 'Pincode is Incorrect';
            }
        }
    }

    get address()
    {
        return this._address;
    }
    set address(address)
    {
        this._address=address;
    }
    
    get city()
    {
        return this._city;
    }
    set city(city)
    {
        this._city=city;
    }

    get state()
    {
        return this._state;
    }
    set state(state)
    {
        this._state=state;
    }

    toString(){
        return "Contact name : "+this.fullName+" || Phone Number: "+this.phoneNumber+" || Address: "+this.address+" || city: "+this.city+" || state: "+this.state+
        " || zip: "+this.zip;
    }
}
