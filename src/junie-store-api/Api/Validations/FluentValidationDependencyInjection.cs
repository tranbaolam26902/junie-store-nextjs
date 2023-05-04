﻿using FluentValidation;
using FluentValidation.AspNetCore;
using System.Reflection;

namespace Api.Validations {
    public static class FluentValidationDependencyInjection {
        public static WebApplicationBuilder ConfigureFluentValidation(this WebApplicationBuilder builder) {
            builder.Services.AddFluentValidationClientsideAdapters();

            builder.Services.AddValidatorsFromAssembly(
                Assembly.GetExecutingAssembly());

            return builder;
        }
    }
}
