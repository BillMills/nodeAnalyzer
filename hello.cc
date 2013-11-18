#include <node.h>
#include <v8.h>

using namespace v8;

Handle<Value> FirstMethod(const Arguments& args) {
  HandleScope scope;
  return scope.Close(args[0]);
}

Handle<Value> SecondMethod(const Arguments& args) {
  HandleScope scope;
  return scope.Close(String::New("and yet, ..."));
}

void init(Handle<Object> exports) {
  exports->Set(String::NewSymbol("hello"),
      FunctionTemplate::New(FirstMethod)->GetFunction());

  exports->Set(String::NewSymbol("helloAgain"),
      FunctionTemplate::New(SecondMethod)->GetFunction());  
}

NODE_MODULE(hello, init)