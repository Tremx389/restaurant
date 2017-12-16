package hu.elte.alkfejl.issuetracker.service;

import lombok.Data;


@Data
public class RestaurantDto {
    
    private String name;
    private String address;
    private int cityId;
}
