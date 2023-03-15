function myInstanceOf(lv,rv) {
    let proto = lv.__proto__;
    while(true) {
        if()
        if(proto === rv.prototype) {
            return true;
        }
        proto = proto.prototype
    }
}