﻿namespace EventManager.Data.Models
{
    using Common.Models;

    using System.Security.Claims;
    using System.Threading.Tasks;

    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using System.Data.Entity;
    using System.Collections.Generic;


    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
        public ApplicationUser()
        {
            this.Events = new HashSet<Event>();
            this.Comments = new HashSet<Comment>();
            this.EventDates = new HashSet<EventDate>();
            this.Friends = new HashSet<ApplicationUser>();
        }

        //public string UserName { get; set; }

        public string PhotoFileName { get; set; }

        public virtual ICollection<ApplicationUser> Friends { get; set; }

        public virtual ICollection<Event> Events { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }

        public virtual ICollection<EventDate> EventDates { get; set; }

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);

            // Add custom user claims here
            return userIdentity;
        }
    }
}