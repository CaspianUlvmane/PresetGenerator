<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class SettingsController extends AbstractController
{
    #[Route('/')]
    public function settings()
    {
        $settings = [
            "TextPlus" => [
                "SettingName" => "Text",
                // TextContent
                "StyledText" => "",
                "Font" => "",
                "Red1" => 1,
                "Green1" => 1,
                "Blue1" => 1,
                // Bold, italic etc
                "Style" => "",
                // Font size
                "Size" => 1,
                "Opacity1" => 1,
                // Takes x and y cordinates of centre
                "CenterX" => 3,
                "CenterY" => 3,
                // Outlines
                "Enabled2" => 0,
                "Enabled3" => 0,
                "Enabled4" => 0,
                // Outline rules
                "Red2" => 1,
                "Green2" => 0,
                "Blue2" => 0,
                "Red3" => 0,
                "Green3" => 0,
                "Blue3" => 0,
                "Red4" => 1,
                "Green4" => 0,
                "Blue4" => 1,

                "SoftnessX2" => 1,
                "SoftnessY2" => 1,
                "SoftnessX3" => 0.5,
                "SoftnessY3" => 0.5,
                "SoftnessX4" => 1,
                "SoftnessY4" => 1,

                "Thickness2" => 1,
                "Thickness3" => 1,
                "Thickness4" => 1,

                "ElementShape2" => 1,
                "ElementShape3" => 1,
                "ElementShape4" => 1,

                "Opacity2" => 1,
                "Opacity3" => 1,
                "Opacity4" => 1,
            ],
            "FastNoise" => [
                "SettingName" => "Noise",
                "Detail" => 1,
                "Contrast" => 1,
                "Brightness" => 1,
                "XScale" => 1,
                "yScale" => 1,
                "Seethe" => 0,
                "SeetheRate" => 0,
                "Discontinuous" => 0,
                "Inverted" => 0,
            ],
        ];

        return $this->render('settings\settingsContainer.html.twig', ["settings" => $settings]);
    }
}
