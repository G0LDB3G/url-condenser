package com.matrob.urlcondenser.mapper;

import com.matrob.urlcondenser.domain.Url;
import com.matrob.urlcondenser.dto.UrlResponseDTO;
import com.matrob.urlcondenser.dto.UrlStatsDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UrlMapper {

    @Mapping(target = "shortUrl", expression = "java(\"http://localhost:8080/\" + url.getShortCode())")
    UrlResponseDTO toResponseDTO(Url url);

    UrlStatsDTO toStatsDTO(Url url);

}
