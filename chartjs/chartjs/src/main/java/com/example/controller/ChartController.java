package com.example.controller;

import com.example.model.Chart;
import com.example.service.IChartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/charts")
@CrossOrigin("*")
public class ChartController {
    @Autowired
    private IChartService chartService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public List<Chart> appList() {
        return chartService.findAll();
    }
}
