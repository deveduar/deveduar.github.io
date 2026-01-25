---
date: 2025-10-22 17:27
title: Arquitectura de Cucumber
tags:
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
cssclasses:
  - hide-embedded-header1
categories:
  - Testing
public_note: "true"
category: Testing
---
# Arquitectura de Cucumber
`$= dv.current().file.tags.join(" ")`

## Arquitectura de Cucumber

### Componentes Principales
```java
// Feature Files -> Step Definitions -> Test Execution
@CucumberContextConfiguration
@SpringBootTest(classes = TestConfig.class)
public class TestConfiguration {
    @Before
    public void setup() {
        // Configuración pre-test
    }
}
```

### Hooks y Configuración
```java
public class Hooks {
    @Before("@ui")
    public void setupBrowser() {
        // Configuración específica para tests UI
    }
    
    @After
    public void teardown(Scenario scenario) {
        if (scenario.isFailed()) {
            // Capturar screenshot o log adicional
        }
    }
}
```

## Patrones de Implementación

### Page Object Model Integration
```java
public class LoginPageSteps {
    private LoginPage loginPage;
    
    @Given("I am on the login page")
    public void navigateToLogin() {
        loginPage.navigateTo();
    }
    
    @When("I login with {string} and {string}")
    public void loginWithCredentials(String user, String pass) {
        loginPage.enterCredentials(user, pass);
        loginPage.submit();
    }
}
```

### Test Data Management
```java
@Data
@Builder
public class TestUser {
    private String username;
    private String password;
    private String role;
}

@Configuration
public class TestDataConfig {
    @Bean
    public TestUser defaultUser() {
        return TestUser.builder()
            .username("testuser")
            .password("testpass")
            .role("USER")
            .build();
    }
}
```

## Integraciones Específicas

### Base de Datos
```java
public class DatabaseSteps {
    @Autowired
    private UserRepository userRepository;
    
    @Given("a user exists in database")
    public void createUserInDatabase() {
        userRepository.save(new User("test", "password"));
    }
    
    @Then("the user should be persisted")
    public void verifyUserPersisted() {
        assertThat(userRepository.findByUsername("test")).isNotNull();
    }
}
```

### API Testing
```java
public class ApiSteps {
    private Response response;
    
    @When("I call the {string} endpoint")
    public void callEndpoint(String endpoint) {
        response = given()
            .contentType(ContentType.JSON)
            .when()
            .get(endpoint);
    }
    
    @Then("the response status should be {int}")
    public void verifyStatus(int expectedStatus) {
        assertThat(response.getStatusCode()).isEqualTo(expectedStatus);
    }
}
```

## Configuraciones Avanzadas

### Properties y Configuración
```properties
# application-test.properties
cucumber.filter.tags=@regression
cucumber.publish.quiet=true
cucumber.plugin=pretty, html:target/cucumber.html
```

### Parallel Execution
```java
@Configuration
public class ParallelConfig {
    @Bean
    @Scope("cucumber-glue")
    public WebDriver webDriver() {
        return new ChromeDriver();
    }
}
```

## Reporting y Monitoreo

### Custom Reports
```java
@AfterAll
public static void generateCustomReport() {
    // Lógica personalizada para reportes
    CucumberReportGenerator.generate();
}
```

### Integración con herramientas externas
```java
public class MetricsCollector {
    @AfterStep
    public void collectMetrics(Scenario scenario) {
        // Recolectar métricas de performance
        TestMetrics.recordStepDuration(scenario.getName());
    }
}
```

## Best Practices

### Organización de Proyecto
```
src/test/
├── resources/
│   └── features/
│       ├── login/
│       ├── payment/
│       └── user-management/
├── java/
│   └── steps/
│       ├── common/
│       ├── ui/
│       └── api/
└── configuration/
```

### Mantenibilidad
```java
// Reutilización de steps
public class CommonSteps {
    @Given("I am an authenticated user")
    public void authenticateUser() {
        // Lógica común de autenticación
    }
}
```

## Performance y Optimización

### Configuración de Timeouts
```java
public class TimeoutConfig {
    @Before
    public void setTimeouts() {
        // Configurar timeouts específicos
        Wait.setDefaultTimeout(Duration.ofSeconds(30));
    }
}
```

### Database Cleanup
```java
@Transactional
public class DatabaseCleanup {
    @After("@requiresCleanup")
    public void cleanDatabase() {
        // Limpiar datos de test
        userRepository.deleteAll();
    }
}
```

## Troubleshooting

### Debug Configuration
```java
public class DebugSteps {
    @Given("debug step")
    public void debugStep() {
        // Punto de interrupción para debugging
        System.out.println("Debug point reached");
    }
}
```

### Logging Integration
```java
@Slf4j
public class LoggedSteps {
    @When("I perform action")
    public void performAction() {
        log.info("Performing action");
        // Implementación del step
    }
}
```

## Seguridad en Tests

### Authentication Testing
```java
public class SecuritySteps {
    @Given("I am authenticated as {string}")
    public void authenticateAsRole(String role) {
        SecurityContext.setAuthentication(role);
    }
    
    @Then("I should have access to {string}")
    public void verifyAccess(String resource) {
        assertThat(SecurityUtils.hasAccess(resource)).isTrue();
    }
}
```

### API Security Testing
```java
public class ApiSecuritySteps {
    private Headers authHeaders;
    
    @Given("I have valid API credentials")
    public void setupApiCredentials() {
        authHeaders = Headers.of(
            "Authorization", "Bearer " + generateToken(),
            "Content-Type", "application/json"
        );
    }
    
    @When("I access secured endpoint {string}")
    public void accessSecuredEndpoint(String endpoint) {
        response = given()
            .headers(authHeaders)
            .when()
            .get(endpoint);
    }
}
```

## Mobile Testing Integration

### Appium con Cucumber
```java
public class MobileSteps {
    private AppiumDriver driver;
    
    @Given("I open the mobile application")
    public void openMobileApp() {
        driver = new AndroidDriver(new URL("http://localhost:4723"), capabilities);
    }
    
    @When("I tap on {string} element")
    public void tapOnElement(String elementId) {
        WebElement element = driver.findElement(By.id(elementId));
        element.click();
    }
}
```

### Mobile-Specific Features
```gherkin
@mobile
Feature: Mobile Login
    Scenario: Login with biometric authentication
        Given the app is installed
        When I attempt biometric login
        Then I should access the main screen
        And biometric prompt should appear
```

## Microservices Testing

### Service Integration
```java
public class MicroserviceSteps {
    @WireMockInject
    private WireMockServer wireMock;
    
    @Given("the user service is available")
    public void setupUserService() {
        wireMock.stubFor(get(urlEqualTo("/users/1"))
            .willReturn(aResponse()
                .withStatus(200)
                .withBody("{\"id\":1,\"name\":\"test\"}")));
    }
}
```

### Contract Testing
```java
public class ContractSteps {
    @Given("a valid service contract")
    public void validateContract() {
        ConsumerDrivenContract contract = 
            Contract.fromYaml("contracts/user-service.yml");
        assertThat(contract.isValid()).isTrue();
    }
}
```

## Performance Testing

### Load Testing Integration
```java
public class PerformanceSteps {
    @When("I execute {int} concurrent requests")
    public void executeConcurrentRequests(int requests) {
        List<CompletableFuture<Response>> futures = 
            IntStream.range(0, requests)
                .mapToObj(i -> makeAsyncRequest())
                .collect(Collectors.toList());
        
        CompletableFuture.allOf(futures.toArray(new CompletableFuture[0])).join();
    }
}
```

### Response Time Validation
```java
public class ResponseTimeSteps {
    @Then("the response time should be less than {long} ms")
    public void verifyResponseTime(long maxTime) {
        assertThat(ResponseTimeTracker.getLastResponseTime())
            .isLessThan(maxTime);
    }
}
```

## AI/ML Testing

### Model Validation
```java
public class MLModelSteps {
    @Given("a trained ML model")
    public void loadTrainedModel() {
        Model model = ModelLoader.load("model.pkl");
        TestContext.setModel(model);
    }
    
    @When("I provide input {string}")
    public void provideModelInput(String input) {
        Prediction prediction = TestContext.getModel().predict(input);
        TestContext.setPrediction(prediction);
    }
    
    @Then("the prediction confidence should be greater than {double}")
    public void verifyConfidence(double minConfidence) {
        assertThat(TestContext.getPrediction().getConfidence())
            .isGreaterThan(minConfidence);
    }
}
```

## Cloud Testing

### AWS Integration
```java
public class CloudSteps {
    private AmazonS3 s3Client;
    
    @Given("a test file in S3 bucket {string}")
    public void setupS3File(String bucket) {
        s3Client.putObject(bucket, "test-file.txt", "test content");
    }
    
    @Then("the file should be processed")
    public void verifyFileProcessing() {
        assertThat(s3Client.doesObjectExist("processed-bucket", "test-file.txt"))
            .isTrue();
    }
}
```

### Kubernetes Testing
```java
public class KubernetesSteps {
    private KubernetesClient k8sClient;
    
    @Given("the deployment {string} is running")
    public void verifyDeploymentRunning(String deployment) {
        assertThat(k8sClient.apps().deployments()
            .withName(deployment)
            .isReady()).isTrue();
    }
}
```

## Accessibility Testing

### WCAG Compliance
```java
public class AccessibilitySteps {
    @Then("the page should meet WCAG {string} guidelines")
    public void verifyAccessibility(String level) {
        AccessibilityScanner scanner = new AccessibilityScanner(driver);
        List<AccessibilityViolation> violations = 
            scanner.scan(WCAGLevel.fromString(level));
        
        assertThat(violations).isEmpty();
    }
}
```

### Screen Reader Testing
```gherkin
Feature: Screen Reader Compatibility
    Scenario: Navigate with keyboard only
        Given I am using only keyboard navigation
        When I tab through the page elements
        Then focus should follow logical order
        And all interactive elements should be reachable
```

## Internationalization Testing

### Multi-language Support
```java
public class LocalizationSteps {
    @Given("the application is set to {string} locale")
    public void setLocale(String locale) {
        LocaleContext.setLocale(Locale.forLanguageTag(locale));
    }
    
    @Then("I should see text {string}")
    public void verifyLocalizedText(String expectedText) {
        assertThat(page.getTextContent()).contains(expectedText);
    }
}
```

### RTL Language Support
```java
public class RTLSteps {
    @Given("I am using RTL language {string}")
    public void setupRTL(String language) {
        PageConfig.setDirection("rtl");
        PageConfig.setLanguage(language);
    }
    
    @Then("the layout should be right-aligned")
    public void verifyRTLayout() {
        assertThat(page.getComputedStyle("direction")).isEqualTo("rtl");
    }
}
```

## Blockchain Testing

### Smart Contract Testing
```java
public class BlockchainSteps {
    private Web3j web3j;
    
    @Given("a deployed smart contract")
    public void setupSmartContract() {
        Credentials credentials = Credentials.create("private-key");
        contract = SmartContract.deploy(web3j, credentials, GAS_PRICE, GAS_LIMIT);
    }
    
    @When("I execute contract function {string}")
    public void executeContractFunction(String function) {
        TransactionReceipt receipt = contract.executeFunction(function).send();
        TestContext.setTransactionReceipt(receipt);
    }
}
```

## IoT Testing

### Device Simulation
```java
public class IoTSteps {
    private MqttClient mqttClient;
    
    @Given("a connected IoT device {string}")
    public void simulateDevice(String deviceId) {
        mqttClient.connect();
        mqttClient.subscribe("devices/" + deviceId + "/commands");
    }
    
    @When("I send command {string} to device")
    public void sendDeviceCommand(String command) {
        mqttClient.publish("devices/" + deviceId + "/commands", command);
    }
}
```

## Quantum Computing Testing

### Quantum Algorithm Validation
```java
public class QuantumSteps {
    private QuantumSimulator simulator;
    
    @Given("a quantum circuit with {int} qubits")
    public void setupQuantumCircuit(int qubits) {
        circuit = new QuantumCircuit(qubits);
        TestContext.setCircuit(circuit);
    }
    
    @When("I apply Hadamard gate to qubit {int}")
    public void applyQuantumGate(int qubit) {
        circuit.h(qubit);
    }
    
    @Then("the superposition should be verified")
    public void verifySuperposition() {
        QuantumResult result = simulator.execute(circuit);
        assertThat(result.getProbability(0)).isCloseTo(0.5, within(0.1));
    }
}
```