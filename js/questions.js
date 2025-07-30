let jsq_questions = [


{
"id": 1,
"question": "What is the primary purpose of the OpenAI Agents SDK?",
"code": "console.log(sdk.purpose);",
"options": {
"a": "Generating text summaries from long documents",
"b": "Building AI agents that can use tools and perform actions",
"c": "Creating visual chatbots with pre-defined conversation flows",
"d": "Analyzing large datasets for statistical insights"
},
"answer": "b"
},
{
"id": 2,
"question": "Which of the following is a core component of an agent in the OpenAI Agents SDK?",
"code": "console.log(agent.components);",
"options": {
"a": "User interface design kit",
"b": "Database management system",
"c": "Instructions (system prompt)",
"d": "Web hosting server"
},
"answer": "c"
},
{
"id": 3,
"question": "What does 'tools' refer to in the context of the OpenAI Agents SDK?",
"code": "console.log(agent.tools.description);",
"options": {
"a": "Physical instruments for hardware manipulation",
"b": "Functions that agents can call to perform actions like searching the web or accessing databases",
"c": "Debugging utilities for code development",
"d": "Graphical user interface elements"
},
"answer": "b"
},
{
"id": 4,
"question": "How do agents typically interact with external systems or data sources?",
"code": "console.log(agent.external_interaction_method);",
"options": {
"a": "Directly modifying system files",
"b": "Through pre-defined tool functions",
"c": "By sending email requests",
"d": "Via manual user input"
},
"answer": "b"
},
{
"id": 5,
"question": "What is the primary benefit of using 'handoffs' in the OpenAI Agents SDK?",
"code": "console.log(handoffs.benefit);",
"options": {
"a": "To increase the agent's processing speed for simple tasks",
"b": "To ensure agents only handle tasks they are explicitly programmed for",
"c": "To enable seamless task delegation between specialized agents",
"d": "To limit the agent's access to external tools"
},
"answer": "c"
},
{
"id": 6,
"question": "Which Python package needs to be installed to use the OpenAI Agents SDK?",
"code": "console.log(installation_command);",
"options": {
"a": "numpy",
"b": "tensorflow",
"c": "openai-agents",
"d": "pandas"
},
"answer": "c"
},
{
"id": 7,
"question": "What is the role of the 'Runner' class in the OpenAI Agents SDK?",
"code": "console.log(Runner.role);",
"options": {
"a": "To define new agent types",
"b": "To manage the execution flow of agents and orchestrate messages/events",
"c": "To provide statistical analysis of agent performance",
"d": "To configure the agent's internal memory"
},
"answer": "b"
},
{
"id": 8,
"question": "What are 'guardrails' used for in the OpenAI Agents SDK?",
"code": "console.log(guardrails.purpose);",
"options": {
"a": "To restrict the agent to a single task",
"b": "To implement parallel validation pipelines for input sanitization and output safety checks",
"c": "To accelerate the agent's learning process",
"d": "To provide a visual interface for agent interaction"
},
"answer": "b"
},
{
"id": 9,
"question": "Which of the following can be turned into a tool for an agent using a decorator in the SDK?",
"code": "console.log(tool_creation_method);",
"options": {
"a": "A database table",
"b": "Any Python function",
"c": "A CSS stylesheet",
"d": "An operating system kernel"
},
"answer": "b"
},
{
"id": 10,
"question": "What does 'tracing' provide in the OpenAI Agents SDK?",
"code": "console.log(tracing.function);",
"options": {
"a": "A method to delete agent logs",
"b": "Built-in observability with execution flow visualization and performance monitoring",
"c": "A way to encrypt agent communications",
"d": "A tool for generating random data"
},
"answer": "b"
},
{
"id": 11,
"question": "Which parameter defines the underlying language model powering an agent?",
"code": "console.log(agent_config.model_param);",
"options": {
"a": "temperature",
"b": "max_tokens",
"c": "model",
"d": "name"
},
"answer": "c"
},
{
"id": 12,
"question": "What is the default output type for agents in the OpenAI Agents SDK?",
"code": "console.log(agent.default_output_type);",
"options": {
"a": "JSON",
"b": "XML",
"c": "Plain text (str)",
"d": "Binary data"
},
"answer": "c"
},
{
"id": 13,
"question": "If you want an agent to produce a specific type of structured output, which parameter would you typically use?",
"code": "console.log(agent_config.structured_output_param);",
"options": {
"a": "input_type",
"b": "output_type",
"c": "data_format",
"d": "response_mode"
},
"answer": "b"
},
{
"id": 14,
"question": "What is 'Context' in the OpenAI Agents SDK?",
"code": "console.log(context.definition);",
"options": {
"a": "The historical conversation of a user",
"b": "A dependency-injection tool for passing data and dependencies throughout an agent run",
"c": "The internal state of the language model",
"d": "A configuration file for the SDK"
},
"answer": "b"
},
{
"id": 15,
"question": "Which of these is NOT a built-in tool provided by the OpenAI Agents SDK?",
"code": "console.log(built_in_tools.list);",
"options": {
"a": "WebSearchTool",
"b": "FileSearchTool",
"c": "ImageGenerationTool",
"d": "EmailSendingTool"
},
"answer": "d"
},
{
"id": 16,
"question": "How can you duplicate an existing Agent object while optionally changing some properties?",
"code": "console.log(agent.copy_method);",
"options": {
"a": "Using the duplicate() method",
"b": "Calling Agent.new_instance()",
"c": "Using the .clone() method",
"d": "Manually creating a new agent with copied parameters"
},
"answer": "c"
},
{
"id": 17,
"question": "What does the temperature parameter control in an agent's configuration?",
"code": "console.log(agent_config.temperature_effect);",
"options": {
"a": "The processing temperature of the CPU",
"b": "The randomness in agent responses",
"c": "The maximum number of concurrent agent runs",
"d": "The logging level of the SDK"
},
"answer": "b"
},
{
"id": 18,
"question": "What is the benefit of defining handoff_descriptions for agents?",
"code": "console.log(handoff_descriptions.benefit);",
"options": {
"a": "They make the agent's code more concise.",
"b": "They provide additional context for determining handoff routing.",
"c": "They are required for all agent definitions.",
"d": "They improve the agent's memory retention."
},
"answer": "b"
},
{
"id": 19,
"question": "When defining dynamic instructions for an agent, what does the function receive as arguments?",
"code": "console.log(dynamic_instructions_args);",
"options": {
"a": "Only the user's input string",
"b": "The agent and the context",
"c": "A list of available tools",
"d": "The current date and time"
},
"answer": "b"
},
{
"id": 20,
"question": "What does Runner.run_sync() do?",
"code": "console.log(Runner.run_sync.description);",
"options": {
"a": "Runs an agent in a background thread asynchronously.",
"b": "Executes an agent workflow synchronously, waiting for completion.",
"c": "Synchronizes agent states across multiple instances.",
"d": "Runs a diagnostic check on the agent's dependencies."
},
"answer": "b"
},
{
"id": 21,
"question": "Which type of programming paradigm is the OpenAI Agents SDK built around?",
"code": "console.log(sdk.paradigm);",
"options": {
"a": "Synchronous programming",
"b": "Procedural programming",
"c": "Asynchronous programming",
"d": "Object-oriented programming (excluding async aspects)"
},
"answer": "c"
},
{
"id": 22,
"question": "What is a common use case for using Pydantic models with the Agents SDK?",
"code": "console.log(pydantic.use_case);",
"options": {
"a": "Generating random numbers",
"b": "Creating user interfaces",
"c": "Defining structured outputs for agents",
"d": "Managing database connections"
},
"answer": "c"
},
{
"id": 23,
"question": "When an agent is configured with tool_use_behavior='required', what does it mean?",
"code": "console.log(tool_use_behavior_required);",
"options": {
"a": "The agent must avoid using any tools.",
"b": "The agent is required to use at least one tool to complete its task.",
"c": "The agent can only use a specific tool.",
"d": "The agent will ask the user for permission before using a tool."
},
"answer": "b"
},
{
"id": 24,
"question": "What is the 'agent loop' in the context of the SDK?",
"code": "console.log(agent_loop.description);",
"options": {
"a": "A simple for loop in Python code.",
"b": "The iterative process where the agent thinks, acts, and repeats until the job is done.",
"c": "A physical feedback loop in robotics.",
"d": "A debugging mechanism to prevent infinite loops."
},
"answer": "b"
},
{
"id": 25,
"question": "How does the OpenAI Agents SDK simplify the development of AI agents compared to building from scratch?",
"code": "console.log(sdk.simplification);",
"options": {
"a": "It provides pre-written content for all common use cases.",
"b": "It standardizes patterns for agent communication, state management, and collaboration.",
"c": "It automatically generates a user interface for every agent.",
"d": "It removes the need for an underlying language model."
},
"answer": "b"
},
{
"id": 26,
"question": "What is the purpose of max_tokens in an agent's configuration?",
"code": "console.log(max_tokens.purpose);",
"options": {
"a": "To limit the number of tool calls an agent can make.",
"b": "To set the maximum length of agent responses.",
"c": "To define the maximum number of agents in a workflow.",
"d": "To control the agent's memory usage."
},
"answer": "b"
},
{
"id": 27,
"question": "Which built-in tool would an agent use to search for up-to-date information on the internet?",
"code": "console.log(internet_search_tool);",
"options": {
"a": "DatabaseQueryTool",
"b": "FileSearchTool",
"c": "WebSearchTool",
"d": "ImageAnalysisTool"
},
"answer": "c"
},
{
"id": 28,
"question": "What is a key difference between 'Handoff Collaboration' and 'Agent as a Tool' patterns?",
"code": "console.log(collaboration_patterns.difference);",
"options": {
"a": "Handoffs are synchronous, while Agents as Tools are asynchronous.",
"b": "Handoffs involve one agent delegating control, while Agent as a Tool involves a main agent calling other agents for specific subtasks.",
"c": "Handoffs are only for text-based agents, while Agents as Tools are for voice agents.",
"d": "Handoffs are only for internal use, while Agents as Tools are for external API calls."
},
"answer": "b"
},
{
"id": 29,
"question": "What does the instructions parameter define for an agent?",
"code": "console.log(instructions.definition);",
"options": {
"a": "The agent's display name in a UI.",
"b": "The core 'system prompt' that defines the agent's behavior and purpose.",
"c": "A list of allowed user inputs.",
"d": "The programming language the agent uses."
},
"answer": "b"
},
{
"id": 30,
"question": "How can you integrate external data sources or APIs with an agent?",
"code": "console.log(external_data_integration);",
"options": {
"a": "By directly embedding the API keys in the agent's instructions.",
"b": "Only through OpenAI's pre-approved integrations.",
"c": "By defining custom Python functions as tools that interact with those sources.",
"d": "The SDK does not support external data integration."
},
"answer": "c"
},
{
"id": 31,
"question": "What is the purpose of pip install openai-agents?",
"code": "console.log(pip_command_purpose);",
"options": {
"a": "To install the OpenAI Python client library.",
"b": "To install the OpenAI Agents SDK.",
"c": "To upgrade existing OpenAI packages.",
"d": "To set up the OpenAI API key."
},
"answer": "b"
},
{
"id": 32,
"question": "Which of these models is typically recommended for complex reasoning tasks, even if it's slower?",
"code": "console.log(model_for_complex_reasoning);",
"options": {
"a": "gpt-3.5-turbo",
"b": "o3-mini",
"c": "gpt-4o",
"d": "o1"
},
"answer": "c"
},
{
"id": 33,
"question": "What does 'input guardrails' in the Agents SDK aim to do?",
"code": "console.log(input_guardrails.purpose);",
"options": {
"a": "Ensure the agent's output is grammatically correct.",
"b": "Verify the user input before handing it into a more complex flow.",
"c": "Limit the number of input tokens.",
"d": "Provide a default response if no input is given."
},
"answer": "b"
},
{
"id": 34,
"question": "What does 'output guardrails' in the Agents SDK aim to do?",
"code": "console.log(output_guardrails.purpose);",
"options": {
"a": "Summarize the agent's output for brevity.",
"b": "Check the output of an agent before handing it to the user.",
"c": "Translate the agent's output into different languages.",
"d": "Store the agent's output in a database."
},
"answer": "b"
},
{
"id": 35,
"question": "How is the OpenAI API key typically configured for use with the Agents SDK?",
"code": "console.log(api_key_configuration);",
"options": {
"a": "Hardcoded directly into the Python script.",
"b": "Passed as a command-line argument every time.",
"c": "Set as an environment variable (e.g., OPENAI_API_KEY).",
"d": "Requested from the user during runtime."
},
"answer": "c"
},
{
"id": 36,
"question": "Which of the following describes a 'deterministic workflow' pattern in the Agents SDK examples?",
"code": "console.log(deterministic_workflow);",
"options": {
"a": "A workflow where the agent's actions are random.",
"b": "A workflow with a predefined, fixed sequence of agent interactions.",
"c": "A workflow that adapts dynamically based on user input.",
"d": "A workflow designed for creative content generation."
},
"answer": "b"
},
{
"id": 37,
"question": "What is the benefit of using async operations with Runner.run_async?",
"code": "console.log(async_benefit);",
"options": {
"a": "It forces synchronous execution for better control.",
"b": "It enables parallel execution of tasks for improved performance.",
"c": "It simplifies debugging of agent workflows.",
"d": "It reduces the memory footprint of agents."
},
"answer": "b"
},
{
"id": 38,
"question": "When an agent is defined, what is name used for?",
"code": "console.log(agent_name_purpose);",
"options": {
"a": "To specify the agent's version number.",
"b": "As an identifier for logging and debugging.",
"c": "To set the agent's default language.",
"d": "To determine the agent's processing priority."
},
"answer": "b"
},
{
"id": 39,
"question": "What does the function_tool decorator do?",
"code": "console.log(function_tool_decorator_role);",
"options": {
"a": "It converts a Python function into a synchronous one.",
"b": "It registers a Python function as a callable tool that an agent can use.",
"c": "It modifies the function's input parameters.",
"d": "It measures the execution time of a function."
},
"answer": "b"
},
{
"id": 40,
"question": "In a multi-agent system, what does a 'triage agent' typically do?",
"code": "console.log(triage_agent_role);",
"options": {
"a": "Performs all tasks independently.",
"b": "Manages user authentication and authorization.",
"c": "Delegates tasks to specialized sub-agents based on the user's intent.",
"d": "Generates reports on agent performance."
},
"answer": "c"
},
{
"id": 41,
"question": "Which of these concepts is essential for building flexible and modular multi-agent systems with the SDK?",
"code": "console.log(modularity_concept);",
"options": {
"a": "Centralized database management.",
"b": "Hardcoded decision trees.",
"c": "Handoffs and tool usage.",
"d": "Batch processing of all requests."
},
"answer": "c"
},
{
"id": 42,
"question": "What does the ModelSettings class allow you to configure for an agent's underlying model?",
"code": "console.log(model_settings_configuration);",
"options": {
"a": "Only the model name.",
"b": "Model tuning parameters like temperature, top_p, etc.",
"c": "The agent's display color.",
"d": "The file path for model storage."
},
"answer": "b"
},
{
"id": 43,
"question": "How can you ensure persistency of the OpenAI API key across terminal sessions?",
"code": "console.log(api_key_persistency);",
"options": {
"a": "Re-exporting it every time you open a new terminal.",
"b": "Adding the export command to your shell configuration file (e.g., .bashrc).",
"c": "Storing it in a Python variable within your script.",
"d": "It is automatically persistent once set."
},
"answer": "b"
},
{
"id": 44,
"question": "What is the primary benefit of using output_type with Pydantic objects?",
"code": "console.log(output_type_pydantic_benefit);",
"options": {
"a": "It allows the agent to generate free-form text.",
"b": "It ensures the agent produces responses in a structured and validated format.",
"c": "It speeds up the agent's response time.",
"d": "It enables the agent to learn from its past outputs."
},
"answer": "b"
},
{
"id": 45,
"question": "What is the general principle for choosing a model for your agent in the SDK?",
"code": "console.log(model_selection_principle);",
"options": {
"a": "Always use the smallest model available for cost savings.",
"b": "Start with the most capable model, establish a baseline, then optimize for cost/latency with smaller models where possible.",
"c": "Choose a model randomly to prevent bias.",
"d": "The model choice is irrelevant to agent performance."
},
"answer": "b"
},
{
"id": 46,
"question": "Which component is responsible for managing the iterative task execution with integrated tool usage and result processing?",
"code": "console.log(component_for_task_execution);",
"options": {
"a": "Guardrails",
"b": "The Agent Loop",
"c": "Handoffs",
"d": "The API Key"
},
"answer": "b"
},
{
"id": 47,
"question": "What kind of systems are 'not' considered agents in the context of this SDK?",
"code": "console.log(not_agents);",
"options": {
"a": "AI systems that can use tools and make decisions.",
"b": "Systems where an LLM manages workflow execution and makes decisions.",
"c": "Simple chatbots or single-turn LLMs that don't control workflow execution.",
"d": "Systems that can proactively correct their actions."
},
"answer": "c"
},
{
"id": 48,
"question": "What is MCP (Model Context Protocol) often used for with the Agents SDK?",
"code": "console.log(mcp_purpose);",
"options": {
"a": "Managing model weights and biases.",
"b": "Connecting agents to external tools and data sources in a standardized way.",
"c": "Optimizing the agent's internal reasoning process.",
"d": "Creating user interfaces for agents."
},
"answer": "b"
},
{
"id": 49,
"question": "What is a key benefit of using a virtual environment for your OpenAI Agents SDK project?",
"code": "console.log(virtual_env_benefit);",
"options": {
"a": "It makes your code run faster.",
"b": "It isolates project dependencies, preventing conflicts with other Python projects.",
"c": "It automatically deploys your agent to the cloud.",
"d": "It provides built-in security features for API keys."
},
"answer": "b"
},
{
"id": 50,
"question": "When should you consider implementing timeouts for external API calls within your agent's tools?",
"code": "console.log(timeout_implementation);",
"options": {
"a": "Only for very simple API calls.",
"b": "To improve code readability.",
"c": "As a performance consideration, especially for time-consuming operations.",
"d": "Never, as the SDK handles all timeouts automatically."
},
"answer": "c"
}
];

