# LeanAspNetCore-React
A 'lean' ASP.NET Core 3.1 app that uses Razor Pages for server pages and React for some of the client functionality. The main goal of this example is to show how ASP.NET Core and modern client-side development can be combined in a simple, understandable way.

## Prerequisites
.NET Core 3.1 (or higher) SDK
Node.js 6.9.0 or higher

## Getting started
```
git clone https://github.com/martijnboland/LeanAspNetCore-React.git
cd LeanAspNetCore-React
dotnet run
```
then, when the .NET Core app is running, open up a new console and enter:
```
cd ClientApp
npm start
```

Browse to https://localhost:8080 to see the working app. 

At the first run, it takes a little while before all dependencies are resolved. Just have a little patience. After the first run, things are much faster.
