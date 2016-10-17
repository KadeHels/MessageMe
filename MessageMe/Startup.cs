using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MessageMe.Startup))]
namespace MessageMe
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
