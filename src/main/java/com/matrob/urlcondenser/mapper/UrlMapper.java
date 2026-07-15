package com.matrob.urlcondenser.mapper;

import com.matrob.urlcondenser.domain.Url;
import com.matrob.urlcondenser.dto.UrlResponseDTO;
import com.matrob.urlcondenser.dto.UrlStatsDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.beans.factory.annotation.Value;

@Mapper(componentModel = "spring")
public abstract class UrlMapper {

    @Value("${app.base-url:http://localhost:8080}")
    @SuppressWarnings("unused")
    protected String baseUrl;

    @Mapping(target = "shortUrl", expression = "java(baseUrl + \"/\" + url.getShortCode())")
    public abstract UrlResponseDTO toResponseDTO(Url url);

    public abstract UrlStatsDTO toStatsDTO(Url url);

}
