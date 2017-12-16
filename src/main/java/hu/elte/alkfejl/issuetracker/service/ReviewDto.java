package hu.elte.alkfejl.issuetracker.service;

import lombok.Data;


@Data
public class ReviewDto {
    
    private int restaurantId;
    private int userId;
    private int rating;
    
}
